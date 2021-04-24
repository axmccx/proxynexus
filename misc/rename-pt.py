from os import listdir, rename
from os.path import isfile, join, basename
from natsort import natsorted, ns
from shutil import move


path = "C:\\Users\\alexm\\Downloads\\Netrunner\\2. Genesis\\"
altart_path = "C:\\Users\\alexm\\Downloads\\Netrunner\\Alt Art\\"
count = 2001

onlyfiles = [f"{path}{f}" for f in listdir(path) if isfile(join(path, f))]
onlyfiles = natsorted(onlyfiles, alg=ns.IGNORECASE)

for f in onlyfiles:
    if '_' in f:
        move(f, f"{altart_path}{basename(f)}")
    else:
        rename(f, f"{path}0{count}.png")
        count += 1
