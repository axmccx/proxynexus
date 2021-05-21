from os import listdir, rename, remove
from os.path import isfile, join, basename, splitext
import json
import shutil

renamed_path = "C:\\Users\\alexm\\Downloads\\proxynexus_images\\tofix\\nisei\\renamed"

def fix_nisei(path):
    files_list = [f"{path}{f}" for f in listdir(path) if isfile(join(path, f))]
    for f in files_list:
        base = basename(splitext(f)[0])
        split_f = base.split('_')
        code = split_f[0]
        # source = split_f[1]
        _type = split_f[2]

        if _type == 'pdf' or _type == 'prev':
            shutil.copy(f, f"{renamed_path}/{code}_os_{_type}.jpg")

fix_nisei("C:\\Users\\alexm\\Downloads\\proxynexus_images\\tofix\\nisei\\")
