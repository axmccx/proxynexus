from os import listdir, rename
from os.path import isfile, join
from natsort import natsorted, ns

path = "C:\\Users\\alexm\\Downloads\\Data and Destiny-NoCurves\\"

onlyfiles = [f"{path}{f}" for f in listdir(path) if isfile(join(path, f))]
onlyfiles = natsorted(onlyfiles, alg=ns.IGNORECASE)
count = 9003

for f in onlyfiles:
    rename(f, f"{path}0{count}.png")
    count += 1
