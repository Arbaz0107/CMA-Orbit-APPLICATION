import math
from PIL import Image, ImageDraw
N=1024; c=N/2; W=54
WHITE=(255,255,255); SUN=(255,182,39); CORAL=(255,107,107); INDIGO=(75,63,209)
P={'L':WHITE,'O':SUN,'D':CORAL}
def pen(d,pts,w=W,col=None):
    col=col or P['L']
    for (x0,y0),(x1,y1) in zip(pts,pts[1:]):
        n=int(max(abs(x1-x0),abs(y1-y0)))+1
        for i in range(n+1):
            t=i/n; x=x0+(x1-x0)*t; y=y0+(y1-y0)*t
            d.ellipse([x-w/2,y-w/2,x+w/2,y+w/2],fill=col)
def arc(d,cx,cy,r,a0,a1,w=W,col=None):
    pts=[(cx+r*math.cos(math.radians(a0+(a1-a0)*i/200)),cy+r*math.sin(math.radians(a0+(a1-a0)*i/200))) for i in range(201)]
    pen(d,pts,w,col)
def letters(s=1.0,cy=c-6):
    L=Image.new("RGBA",(N,N),(0,0,0,0)); d=ImageDraw.Draw(L)
    top,bot=cy-135,cy+135; o=62
    arc(d,235+o,cy,135,42,318)
    pen(d,[(400+o,bot),(400+o,top),(487+o,cy+35),(574+o,top),(574+o,bot)])
    pen(d,[(640+o,bot),(727+o,top),(814+o,bot)])
    pen(d,[(668+o,cy+72),(786+o,cy+72)],w=W*0.8)
    return L
def ell(d,a,b,cy,t0,t1,w):
    pts=[(c+a*math.cos(math.radians(t0+(t1-t0)*i/300)),cy+b*math.sin(math.radians(t0+(t1-t0)*i/300))) for i in range(301)]
    pen(d,pts,w,P['O'])
def orbit(cy=c-6,tilt=-14):
    a,b=450,165; back=Image.new("RGBA",(N,N),(0,0,0,0)); front=back.copy()
    ell(ImageDraw.Draw(back),a,b,cy,180,360,13); ell(ImageDraw.Draw(front),a,b,cy,0,180,13)
    back=back.rotate(-tilt,Image.BICUBIC,center=(c,cy)); front=front.rotate(-tilt,Image.BICUBIC,center=(c,cy))
    t=math.radians(-35); ex,ey=a*math.cos(t),b*math.sin(t); th=math.radians(tilt)
    return back,front,(c+ex*math.cos(th)-ey*math.sin(th),cy+ex*math.sin(th)+ey*math.cos(th))
def mark():
    back,front,(x,y)=orbit(); im=Image.alpha_composite(back,letters()); im=Image.alpha_composite(im,front)
    d=ImageDraw.Draw(im); d.ellipse([x-38,y-38,x+38,y+38],fill=P['D']); return im
def tile(bg=INDIGO,scale=0.92):
    t=Image.new("RGBA",(N,N),(0,0,0,0)); m=Image.new("L",(N,N),0)
    ImageDraw.Draw(m).rounded_rectangle([0,0,N-1,N-1],radius=int(N*.23),fill=255)
    t.paste(Image.new("RGBA",(N,N),bg+(255,)),(0,0),m)
    mk=mark(); n=int(N*scale); mk=mk.resize((n,n),Image.LANCZOS); t.alpha_composite(mk,((N-n)//2,(N-n)//2)); return t
if __name__=="__main__":
    t=tile(); t.save("cma-orbit-logo-v2.png"); mark().save("cma-orbit-mark-v2.png")
    t.resize((512,512),Image.LANCZOS).save("/mnt/user-data/outputs/cma-orbit-logo-v2.png")
