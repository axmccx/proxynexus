from os import listdir, rename
from os.path import isfile, join, basename
from natsort import natsorted, ns
from shutil import move


altart_path = "C:\\Users\\alexm\\Downloads\\Netrunner\\Alt Arts\\"

def rename_pt(path, count):
    onlyfiles = [f"{path}{f}" for f in listdir(path) if isfile(join(path, f))]
    onlyfiles = natsorted(onlyfiles, alg=ns.IGNORECASE)

    for f in onlyfiles:
        if '_' in f:
            move(f, f"{altart_path}{basename(f)}")
        else:
            count_str = f"0{count}" if count < 10000 else f"{count}"
            rename(f, f"{path}{count_str}.png")
            count += 1


# rename_pt("C:\\Users\\alexm\\Downloads\\Netrunner\\3. Creation and Control\\", 3001)
# rename_pt("C:\\Users\\alexm\\Downloads\\Netrunner\\5. Honor and Profit\\", 5001)
# rename_pt("C:\\Users\\alexm\\Downloads\\Netrunner\\7. Order and Chaos\\", 7001)
# rename_pt("C:\\Users\\alexm\\Downloads\\Netrunner\\9. Data and Destiny\\", 9001)
rename_pt("C:\\Users\\alexm\\Downloads\\Netrunner\\15. Reign and Reverie\\", 22001)
