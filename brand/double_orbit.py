"""CMA Orbit 2.0 logo: 'Double Orbit' — two nested C arcs (outer = learning, inner = progress) + satellite dot.
Palette sampled from the reference UI."""
import math, os, shutil
from PIL import Image, ImageDraw
N=1024; c=N/2
LAV=(124,123,203); WHITE=(255,255,255); MUST=(240,176,53); PINK=(232,126,149); INK=(39,42,47); TEAL=(56,128,116)
def stroke_arc(d,r,a0,a1,w,col):
    for i in range(401):
        a=math.radians(a0+(a1-a0)*i/400); x=c+r*math.cos(a); y=c+r*math.sin(a)
        d.ellipse([x-w/2,y-w/2,x+w/2,y+w/2],fill=col)
def mark(outer=WHITE,inner=MUST,dot=PINK,ss=2):
    S=N*ss; L=Image.new("RGBA",(S,S),(0,0,0,0)); d=ImageDraw.Draw(L)
    k=ss
    def arc(r,a0,a1,w,col):
        for i in range(401):
            a=math.radians(a0+(a1-a0)*i/400); x=(c+r*math.cos(a))*k; y=(c+r*math.sin(a))*k
            d.ellipse([x-w*k/2,y-w*k/2,x+w*k/2,y+w*k/2],fill=col)
    arc(300,36,324,124,outer); arc(172,36,324,66,inner)
    x,y=(c+236)*k,c*k; R=62*k; d.ellipse([x-R,y-R,x+R,y+R],fill=dot)
    return L.resize((N,N),Image.LANCZOS)
def bgtile(col,shape,size):
    S=size*4; m=Image.new("L",(S,S),0); md=ImageDraw.Draw(m)
    if shape=="round": md.ellipse([0,0,S-1,S-1],fill=255)
    elif shape=="sq": md.rounded_rectangle([0,0,S-1,S-1],radius=int(S*.23),fill=255)
    else: md.rectangle([0,0,S-1,S-1],fill=255)
    t=Image.new("RGBA",(S,S),col+(255,)); t.putalpha(m); return t.resize((size,size),Image.LANCZOS)
def fit(img,size,scale):
    n=int(size*scale); s=img.resize((n,n),Image.LANCZOS)
    o=Image.new("RGBA",(size,size),(0,0,0,0)); o.paste(s,((size-n)//2,(size-n)//2),s); return o
if __name__=="__main__":
    mk=mark(); res="../icons/res"
    for dpi,leg in {"mdpi":48,"hdpi":72,"xhdpi":96,"xxhdpi":144,"xxxhdpi":192}.items():
        ad=leg*108//48; p=f"{res}/mipmap-{dpi}"
        bgtile(LAV,None,ad).convert("RGB").save(f"{p}/ic_cap_bg.png")
        fit(mk,ad,0.80).save(f"{p}/ic_cap_fg.png")
        for nm,sh in (("ic_launcher","sq"),("ic_launcher_round","round")):
            t=bgtile(LAV,sh,leg); t.alpha_composite(fit(mk,leg,0.98 if sh=="sq" else 0.92)); t.save(f"{p}/{nm}.png")
    fit(mk,1152,0.62).save(f"{res}/drawable-xxxhdpi/splash_icon.png")
    t=bgtile(LAV,"sq",512); t.alpha_composite(fit(mk,512,0.98)); t.save("cma-orbit-double-orbit-512.png")
    fit(mk,512,0.98).save("../www/logo-mark.png")   # transparent mark for header/splash
    os.makedirs("/mnt/user-data/outputs",exist_ok=True); t.save("/mnt/user-data/outputs/cma-orbit-double-orbit-logo.png")
    # splash bg colour = lavender-ink: keep deep charcoal-violet for contrast
    print("done")
