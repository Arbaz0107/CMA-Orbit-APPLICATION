"""Signs every build with ONE permanent key and gives each build a higher version code.
Android only installs an APK as an UPDATE when (1) the package name, (2) the signing key and
(3) a version code that is not lower all match the app that is already installed."""
import os, pathlib, re, sys

p = pathlib.Path("android/app/build.gradle")
if not p.exists():
    print("WARNING: android/app/build.gradle not found - skipping")
    sys.exit(0)
s = p.read_text(encoding="utf-8")

run = os.environ.get("RUN_NUMBER", "1")
try:
    run_i = max(1, int(run))
except ValueError:
    run_i = 1

# 1) permanent signing key (used by the debug build that this project installs)
block = '''
    signingConfigs {
        debug {
            storeFile rootProject.file('../keystore/cma-orbit.jks')
            storePassword 'orbit-2026-key'
            keyAlias 'cmaorbit'
            keyPassword 'orbit-2026-key'
            storeType 'pkcs12'
        }
    }
'''
if "cma-orbit.jks" not in s:
    s, n = re.subn(r'(\n\s*android\s*\{)', lambda m: m.group(1) + block, s, count=1)
    if n == 0:
        print("WARNING: 'android {' block not found - signing not patched")

# 2) version code goes up with every build, so installs always count as updates
s, n1 = re.subn(r'versionCode\s+\d+', f'versionCode {run_i}', s, count=1)
s, n2 = re.subn(r'versionName\s+"[^"]*"', f'versionName "3.1.{run_i}"', s, count=1)
p.write_text(s, encoding="utf-8")
print(f"signing patched; versionCode={run_i} (replaced {n1}), versionName 3.1.{run_i} (replaced {n2})")
print(s[:1500])
