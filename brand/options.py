import math
from PIL import Image, ImageDraw, ImageFont
N=1024
def canvas(bg):
    im=Image.new("RGBA",(N,N),(0,0,0,0)); m=Image.new("L",(N,N),0)
    ImageDraw.Draw(m).rounded_rectangle([0,0,N-1,N-1],radius=int(N*.23),fill=255)
    im.paste(Image.new("RGBA",(N,N),bg),(0,0),m); return im
def thick_arc(d,cx,cy,r,a0,a1,w,col):
    steps=int(abs(a1-a0)*2)
    for i in range(steps+1):
        a=math.radians(a0+(a1-a0)*i/steps); x=cx+r*math.cos(a); y=cy+r*math.sin(a)
        d.ellipse([x-w/2,y-w/2,x+w/2,y+w/2],fill=col)
def dot(d,x,y,r,col): d.ellipse([x-r,y-r,x+r,y+r],fill=col)
c=N/2
# 1 Planet C
A=canvas((17,138,120,255)); d=ImageDraw.Draw(A)
thick_arc(d,c-20,c,300,40,320,150,(255,248,232))
dot(d,c+190,c,92,(255,182,39))
# 2 Double orbit C
B=canvas((75,63,209,255)); d=ImageDraw.Draw(B)
thick_arc(d,c,c,300,35,325,120,(255,255,255))
thick_arc(d,c,c,170,35,325,64,(255,182,39))
dot(d,c+300*math.cos(math.radians(35)),c-300*math.sin(math.radians(35))*-1*-1,0,(0,0,0))
dot(d,c+235,c,58,(255,107,107))
# 3 Rising progress ring with arrow
C=canvas((255,247,224,255)); d=ImageDraw.Draw(C)
thick_arc(d,c,c,290,-200,-20+0,130,(255,107,107))   # open ring
ex=c+290*math.cos(math.radians(-20)); ey=c+290*math.sin(math.radians(-20))
d.polygon([(ex+10,ey-150),(ex+190,ey+40),(ex-120,ey+90)],fill=(255,107,107))
dot(d,c,c,70,(17,138,120))
# 4 Spiral orbit
D=canvas((30,27,75,255)); d=ImageDraw.Draw(D)
pts=[]
for i in range(0,1000):
    t=i/999; a=math.radians(-40+t*(560)); r=330-t*210
    w=40+ t*0 ; thick=150-t*95
    x=c+r*math.cos(a); y=c+r*math.sin(a); dot(d,x,y,thick/2,(255,255,255) if t<.62 else (255,182,39))
dot(d,c+5,c+0,52,(255,107,107))
sheet=Image.new("RGB",(2*540+60,2*600+40),(245,243,255)); dr=ImageDraw.Draw(sheet)
f=ImageFont.load_default()
for i,(im,lab) in enumerate([(A,"1  Planet C"),(B,"2  Double orbit"),(C,"3  Rising ring"),(D,"4  Spiral orbit")]):
    x=30+(i%2)*(540); y=20+(i//2)*600
    sheet.paste(im.resize((500,500),Image.LANCZOS),(x,y),im.resize((500,500),Image.LANCZOS))
    dr.text((x+190,y+515),lab,fill=(30,27,75),font=f)
sheet.save("logo-options.png")
for n,im in zip("1234",(A,B,C,D)): im.save(f"opt{n}.png")
