import os, sys, glob, shutil

os.chdir(sys.path[0] + "/..")

pdfs = glob.glob("static/tmp/*.pdf")
zips = glob.glob("static/tmp/*.zip")
scaled_jpgs = glob.glob("static/tmp/scaled/*.jpg")
fitted_jpgs = glob.glob("static/tmp/fitted/*.jpg")
images_jpgs = glob.glob("static/tmp/images/*.jpg")
med_images_jpgs = glob.glob("static/tmp/med-images/*.jpg")
card_backs = glob.glob("static/tmp/zip-cache/*.png")
all_files = pdfs + zips + scaled_jpgs + fitted_jpgs \
    + images_jpgs + med_images_jpgs + card_backs

zip_caches = [s for s in glob.glob("static/tmp/zip-cache/*") if ".txt" not in s and ".png" not in s]

if (len(all_files + zip_caches) > 0): 
    print("Deleting the following cached files:")
    for file in all_files:
        os.remove(file)
        print(file)

    for dir in zip_caches:
        shutil.rmtree(dir)
        print(dir)
else:
    print("No cached files to delete")

