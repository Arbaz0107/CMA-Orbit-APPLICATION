"""CMA Orbit 2.0 brand mark -> launcher / adaptive / splash PNGs + SVG."""
import math, pathlib
from PIL import Image, ImageDraw
INDIGO=(75,63,209); DEEP=(30,27,75); WHITE=(255,255,255); SUN=(255,182,39); CORAL=(255,107,107)
M=1600  # master canvas

def mark(white=WHITE):
    S=M; L=Image.new("RGBA",(S,S),(0,0,0,0)); c=S/2
    # C ring (open to the right)
    r=0.25*S; w=0.09*S
    d=ImageDraw.Draw(L)
    box=[c-r,c-r,c+r,c+r]
    d.arc(box,38,322,fill=white,width=int(w))
    for ang in (38,322):
        x=c+(r-w/2)*math.cos(math.radians(ang)); y=c+(r-w/2)*math.sin(math.radians(ang))
        d.ellipse([x-w/2,y-w/2,x+w/2,y+w/2],fill=white)
    # orbit ellipse, tilted
    a,b,tilt,sw=0.40*S,0.145*S,-28,0.03*S
    O=Image.new("RGBA",(S,S),(0,0,0,0)); od=ImageDraw.Draw(O)
    od.ellipse([c-a,c-b,c+a,c+b],outline=SUN,width=int(sw))
    O=O.rotate(-tilt,resample=Image.BICUBIC,center=(c,c))
    L=Image.alpha_composite(L,O)
    # satellite on the orbit
    t=math.radians(-18); ex,ey=a*math.cos(t),b*math.sin(t); th=math.radians(tilt)
    x=c+ex*math.cos(th)-ey*math.sin(th); y=c+ex*math.sin(th)+ey*math.cos(th)
    d=ImageDraw.Draw(L); R=0.058*S
    d.ellipse([x-R*1.45,y-R*1.45,x+R*1.45,y+R*1.45],fill=None)
    d.ellipse([x-R,y-R,x+R,y+R],fill=CORAL)
    return L, (x/S,y/S)

def fit(img,size,scale):
    n=int(size*scale); s=img.resize((n,n),Image.LANCZOS)
    out=Image.new("RGBA",(size,size),(0,0,0,0)); out.paste(s,((size-n)//2,(size-n)//2),s); return out

def bg(size,shape):
    S=size*4; B=Image.new("RGBA",(S,S),INDIGO+(255,)); d=ImageDraw.Draw(B)
    d.ellipse([-S*.25,-S*.35,S*.55,S*.45],fill=(98,86,230,255))   # soft highlight
    d.ellipse([S*.55,S*.7,S*1.3,S*1.4],fill=(58,48,180,255))
    B=B.resize((size,size),Image.LANCZOS)
    if shape:
        m=Image.new("L",(size*4,size*4),0); md=ImageDraw.Draw(m)
        if shape=="round": md.ellipse([0,0,size*4-1,size*4-1],fill=255)
        else: md.rounded_rectangle([0,0,size*4-1,size*4-1],radius=int(size*4*.22),fill=255)
        B.putalpha(m.resize((size,size),Image.LANCZOS))
    return B

mk,_=mark()
res=pathlib.Path("icons/res")
for dpi,leg in {"mdpi":48,"hdpi":72,"xhdpi":96,"xxhdpi":144,"xxxhdpi":192}.items():
    ad=leg*108//48; d=res/f"mipmap-{dpi}"
    bg(ad,None).convert("RGB").save(d/"ic_cap_bg.png")
    fit(mk,ad,0.70).save(d/"ic_cap_fg.png")
    for name,shape in (("ic_launcher","sq"),("ic_launcher_round","round")):
        b=bg(leg,shape); b.alpha_composite(fit(mk,leg,0.80)); b.save(d/f"{name}.png")
# splash (centered mark on deep indigo, background set by splash.xml)
fit(mk,1152,0.62).save(res/"drawable-xxxhdpi/splash_icon.png")
# store/preview
b=bg(512,"sq"); b.alpha_composite(fit(mk,512,0.80)); b.save("brand/cma-orbit-icon-512.png")
print("ok")
