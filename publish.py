#!/opt/homebrew/bin/python3
from bagbag import *

fversion = open("version").read()

sversion = fversion.split(".")[0] + '.' + fversion.split(".")[1] + '.'
version = int(fversion.split(".")[-1])

nfversion = input("Next version ["+sversion+str(version+1)+"]: ")

if nfversion.strip() == "":
    nfversion = sversion+str(version+1)

print("Next version: " + nfversion)

open("version", "w").write(nfversion)

Tools.File("index.html").Write(
    open("index.html").read().replace(fversion, nfversion)
)

Os.System("git add *")
Os.System(f'git commit -m "{nfversion}"')
Os.System("git push")
Os.System(f"gh release create {nfversion} --generate-notes")


