import cma_mark as m
from PIL import Image, ImageDraw, ImageFont
h=lambda x:tuple(int(x[i:i+2],16) for i in (1,3,5))
opts=[("1 Indigo Classic","#4B3FD1","#FFFFFF","#FFB627","#FF6B6B"),
("2 Teal Fresh","#0F8A78","#FFF8E8","#FFB627","#FF6B6B"),
("3 Cream Coral","#FFF4DC","#1E1B4B","#FF6B6B","#4B3FD1"),
("4 Midnight Gold","#1E1B4B","#FFFFFF","#FFB627","#2DD4BF"),
("5 Sunrise Coral","#FF6B6B","#FFFFFF","#1E1B4B","#FFD166"),
("6 Sky & Violet","#E4E9FF","#4B3FD1","#14B8A6","#FF6B6B")]
f=ImageFont.load_default(); S=420
sheet=Image.new("RGB",(3*S+40,2*(S+60)+20),(250,248,255)); d=ImageDraw.Draw(sheet)
for i,(n,bg,l,o,dt) in enumerate(opts):
    m.P.update(L=h(l),O=h(o),D=h(dt)); t=m.tile(h(bg)).resize((S-20,S-20),Image.LANCZOS)
    x=20+(i%3)*S; y=15+(i//3)*(S+60); sheet.paste(t,(x,y),t)
    d.text((x,y+S-5),f"{n}   {bg} / {l} / {o} / {dt}",fill=(30,27,75),font=f)
    t2=m.tile(h(bg)); t2.save(f"colour{i+1}.png")
sheet.save("/mnt/user-data/outputs/cma-orbit-colour-options.png"); sheet.save("colour-sheet.png")
