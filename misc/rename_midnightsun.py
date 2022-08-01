from os import listdir
from os.path import isfile, join, basename, splitext
import shutil


renamed_path = "C:\\Users\\alexm\\Desktop\\renamed"


def rename_ms(path):
    files_list = [f"{path}{f}" for f in listdir(path) if isfile(join(path, f))]
    for f in files_list:
        base = basename(splitext(f)[0])
        shutil.copy(f, f"{renamed_path}/{base}_os_prev.jpg")
        shutil.copy(f, f"{renamed_path}/{base}_os_pdf.jpg")


rename_ms("C:\\Users\\alexm\\Desktop\\Midnight Sun\\")
