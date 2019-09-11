import os, sys, glob, shutil

os.chdir(sys.path[0] + "/..")
all_files_and_dirs = [s for s in glob.glob("static/tmp/*") if ".txt" not in s]
if (len(all_files_and_dirs) > 0):
    print("Deleting the following cached files and directories:")
    for e in all_files_and_dirs:
        if os.path.isfile(e):
            os.remove(e)
        if os.path.isdir(e):
            shutil.rmtree(e)
        print(e)
else:
    print("Nothing to delete")
