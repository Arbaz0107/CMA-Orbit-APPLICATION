"""Makes the Android launch + window background midnight navy so there is no black flash
before the in-app splash screen appears. Safe to run: it only warns if the template differs."""
import pathlib, re, sys

PURPLE = "#7C7BCB"   # launch / splash screen colour
BLACK = "#000000"    # window background: this is what shows beside the camera notch in landscape
p = pathlib.Path("android/app/src/main/res/values/styles.xml")
if not p.exists():
    print("WARNING: styles.xml not found - skipping theme patch")
    sys.exit(0)

s = p.read_text(encoding="utf-8")
changed = False

# 1) window background of the main app theme (shown between splash and first WebView paint, and beside the notch / cutout in landscape)
m = re.search(r'<style name="AppTheme\.NoActionBar"[^>]*>', s)
if m and 'android:windowBackground' not in s[m.end():s.index('</style>', m.end())]:
    s = s[:m.end()] + f'\n        <item name="android:windowBackground">{BLACK}</item>' + s[m.end():]
    changed = True
elif not m:
    print("WARNING: AppTheme.NoActionBar not found")

# 2) launch / system splash theme (Android 12+ splash screen API)
launch = f'''<style name="AppTheme.NoActionBarLaunch" parent="Theme.SplashScreen">
        <item name="windowSplashScreenBackground">{PURPLE}</item>
        <item name="windowSplashScreenAnimatedIcon">@drawable/splash_icon</item>
        <item name="postSplashScreenTheme">@style/AppTheme.NoActionBar</item>
        <item name="android:background">@drawable/splash</item>
    </style>'''
if re.search(r'<style name="AppTheme\.NoActionBarLaunch"', s):
    s = re.sub(r'<style name="AppTheme\.NoActionBarLaunch"[^>]*>.*?</style>', launch, s, count=1, flags=re.S)
    changed = True
else:
    s = s.replace('</resources>', f'    {launch}\n</resources>')
    changed = True

p.write_text(s, encoding="utf-8")
print("Android theme patched" if changed else "Android theme already OK")
print(s)
