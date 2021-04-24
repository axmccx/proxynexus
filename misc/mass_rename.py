from os import listdir, rename
from os.path import isfile, join, basename, splitext
from natsort import natsorted, ns
from shutil import move



def mass_rename(path, suffix):
    files_list = [f"{path}{f}" for f in listdir(path) if isfile(join(path, f))]

    for f in files_list:
        base = basename(f).replace('-', '')
        if base.endswith("a.jpg"):
            rename(f, f"{path}{base[:-5]}{suffix}_back.jpg")

        else:
            rename(f, f"{path}{splitext(base)[0]}{suffix}.jpg")


# mass_rename("C:\\Users\\alexm\\Downloads\\proxynexus_images\\images\\", "_lm_pdf")
# mass_rename("C:\\Users\\alexm\\Downloads\\proxynexus_images\\fitted\\", "_lm_fitted")
# mass_rename("C:\\Users\\alexm\\Downloads\\proxynexus_images\\scaled\\", "_lm_scaled")
# mass_rename("C:\\Users\\alexm\\Downloads\\proxynexus_images\\low-images\\", "_lm_prev")

# mass_rename("C:\\Users\\alexm\\Downloads\\proxynexus_images\\german-images\\", "_de_pdf")
# mass_rename("C:\\Users\\alexm\\Downloads\\proxynexus_images\\german-fitted\\", "_de_fitted")
# mass_rename("C:\\Users\\alexm\\Downloads\\proxynexus_images\\german-scaled\\", "_de_scaled")
# mass_rename("C:\\Users\\alexm\\Downloads\\proxynexus_images\\german-low-images\\", "_de_prev")


def strip_prefix(path, i):
    files_list = [f"{path}{f}" for f in listdir(path) if isfile(join(path, f))]

    for f in files_list:
        base = basename(f)[i:]
        rename(f, f"{path}{base}")


# strip_prefix("C:\\Users\\alexm\\Downloads\\proxynexus_images\\fitted\\", 6)
# strip_prefix("C:\\Users\\alexm\\Downloads\\proxynexus_images\\scaled\\", 6)
# strip_prefix("C:\\Users\\alexm\\Downloads\\proxynexus_images\\german-fitted\\", 6)
# strip_prefix("C:\\Users\\alexm\\Downloads\\proxynexus_images\\german-scaled\\", 6)





