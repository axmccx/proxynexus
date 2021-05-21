import os
import cv2


def load_images(path):
    if os.path.isfile(path):
        return [cv2.imread(path, cv2.IMREAD_COLOR)], [os.path.basename(path)]
    elif os.path.isdir(path):
        images, filenames = [], []
        for filename in os.listdir(path):
            if "_pdf" in filename:
                img = cv2.imread(os.path.join(path, filename))
                if img is not None:
                    images.append(img)
                    filenames.append(filename)
        return images, filenames
    else:
        raise ValueError("Provided path is neither a file or directory")

def mass_resize(path):
    imgs, filenames = load_images(path)
    scale_percent = 50

    for img, filename in zip(imgs, filenames):
        width = int(img.shape[1] * scale_percent / 100)
        height = int(img.shape[0] * scale_percent / 100)
        dim = (width, height)
        prev_img = cv2.resize(img, dim, interpolation = cv2.INTER_AREA)
        filename, extension = os.path.splitext(filename)
        code = filename.split('_')[0]
        cv2.imwrite(f"{path}/{code}_os_prev{extension}", prev_img)


# mass_resize("C:\\Users\\alexm\\Downloads\\Netrunner\\version2")
mass_resize("C:\\Users\\alexm\\Downloads\\proxynexus_images\\tofix\\24000")
