import os, shutil, cma_mark as m
from PIL import Image
h=lambda x:tuple(int(x[i:i+2],16) for i in (1,3,5))
sets={"option1-indigo-classic":("#4B3FD1","#FFFFFF","#FFB627","#FF6B6B"),
"option2-teal-fresh":("#0F8A78","#FFF8E8","#FFB627","#FF6B6B"),
"option4-midnight-gold":("#1E1B4B","#FFFFFF","#FFB627","#2DD4BF"),
"option5-sunrise-coral":("#FF6B6B","#FFFFFF","#1E1B4B","#FFD166")}
dens={"mdpi":48,"hdpi":72,"xhdpi":96,"xxhdpi":144,"xxxhdpi":192}
out="/home/claude/icon-sets"; shutil.rmtree(out,ignore_errors=True)
def fit(img,size,scale):
    n=int(size*scale); s=img.resize((n,n),Image.LANCZOS)
    o=Image.new("RGBA",(size,size),(0,0,0,0)); o.paste(s,((size-n)//2,(size-n)//2),s); return o
def circle(img):
    s=img.size[0]; mk=Image.new("L",(s*4,s*4),0)
    from PIL import ImageDraw; ImageDraw.Draw(mk).ellipse([0,0,s*4-1,s*4-1],fill=255)
    r=img.copy(); r.putalpha(mk.resize((s,s),Image.LANCZOS)); return r
for name,(bg,l,o,d) in sets.items():
    m.P.update(L=h(l),O=h(o),D=h(d)); mark=m.mark(); tile=m.tile(h(bg),0.92)
    R=f"{out}/{name}/icons/res"
    for dpi,leg in dens.items():
        ad=leg*108//48; p=f"{R}/mipmap-{dpi}"; os.makedirs(p,exist_ok=True)
        Image.new("RGB",(ad,ad),h(bg)).save(f"{p}/ic_cap_bg.png")
        fit(mark,ad,0.74).save(f"{p}/ic_cap_fg.png")
        t=tile.resize((leg,leg),Image.LANCZOS); t.save(f"{p}/ic_launcher.png")
        # round: full-bleed bg circle + mark
        full=Image.new("RGBA",(leg,leg),h(bg)+(255,)); full.alpha_composite(fit(mark,leg,0.80)); circle(full).save(f"{p}/ic_launcher_round.png")
    os.makedirs(f"{R}/drawable-xxxhdpi",exist_ok=True); os.makedirs(f"{R}/drawable",exist_ok=True)
    fit(mark,1152,0.62).save(f"{R}/drawable-xxxhdpi/splash_icon.png")
    shutil.copy("../icons/res/drawable/splash.xml",f"{R}/drawable/splash.xml")
    sx=open(f"{R}/drawable/splash.xml").read().replace("#1E1B4B",bg.upper()); open(f"{R}/drawable/splash.xml","w").write(sx)
    shutil.copytree("../icons/res/mipmap-anydpi-v26",f"{R}/mipmap-anydpi-v26")
    tile.resize((512,512),Image.LANCZOS).save(f"{out}/{name}/{name}-512.png")
    open(f"{out}/{name}/COLOUR.txt","w").write(f"Brand/splash background: {bg}\nSet this value in: scripts/patch_android_theme.py (PURPLE), capacitor.config.json (both backgroundColor), and it is already set in icons/res/drawable/splash.xml\n")
print(os.listdir(out))
