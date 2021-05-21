import os
import cv2
import argparse
import numpy as np
from matplotlib import pyplot as plt

# Assuming 96 dpi
CUT = (818, 1142)      # Cut dimmension (width, height) according to MPC
BLEED = (898, 1221)    # Bleed dimmension (width, height) according to MPC

# Constants to tweak
BORDER_BLEED = 40       # Probably doesn't need to change
WHITE_CUTOFF = 253      # Low end of color intensity to considering as part of mask for inpaint
KERNEL_SIZE = (5, 5)    # Kernal size for cv2.dilate
INPAINT_RADIUS = 3      # Radius of a circular neighborhood of each point inpainted

def load_images(path):
    if os.path.isfile(path):
        return [cv2.imread(path, cv2.IMREAD_COLOR)], [os.path.basename(path)]
    elif os.path.isdir(path):
        images, filenames = [], []
        for filename in os.listdir(path):
            img = cv2.imread(os.path.join(path, filename))
            if img is not None:
                images.append(img)
                filenames.append(filename)
        return images, filenames
    else:
        raise ValueError("Provided path is neither a file or directory")

def get_border_dimensions(img):
    """
    return border dimensions in tuple like: (top&bottom, sides)
    """
    height, width, _ = img.shape
    return ((BLEED[1] - height)//2, (BLEED[0] - width)//2)

def apply_mask(img, mask, x, y):
    for channel in range(3):
        if img[x, y, channel] > WHITE_CUTOFF:
            mask[x, y] = 255

def gen_copy_make_border(img, make_pdf=True, show_mask=False):
    ow, oh, _ = img.shape
    mask = np.zeros((ow, oh), dtype=np.uint8)

    for x in range(0, BORDER_BLEED):
        for y in range(0, BORDER_BLEED):
            apply_mask(img, mask, x, y)            # Top left corner
            apply_mask(img, mask, ow-x-1, y)       # Bottom left corner
            apply_mask(img, mask, x, oh-y-1)       # Top right corner
            apply_mask(img, mask, ow-x-1, oh-y-1)  # Bottom right corner

    kernel = np.ones(KERNEL_SIZE, np.uint8)
    mask = cv2.dilate(mask, kernel, iterations=3)
    if show_mask:
        plt.figure("mask")
        plt.imshow(mask)
        plt.show()
    result = cv2.inpaint(img, mask, INPAINT_RADIUS, cv2.INPAINT_NS)
    if make_pdf:
        return result
    border_dims = get_border_dimensions(img)
    border_dims = (border_dims[0], border_dims[0], border_dims[1], border_dims[1])
    return cv2.copyMakeBorder(result, *border_dims, cv2.BORDER_REPLICATE)


if __name__ == '__main__':
    ap = argparse.ArgumentParser()
    ap.add_argument("PATH", help="Path to single jpg or directory")
    ap.add_argument("-o", "--output", help="Output directory to save images")
    args = vars(ap.parse_args())
    args = ap.parse_args()
    imgs, filenames = load_images(args.PATH)

    for img, filename in zip(imgs, filenames):
        pdf_img = gen_copy_make_border(img)
        filename, extension = os.path.splitext(filename)
        code = filename.split('_')[0]
        # cv2.imwrite(f"{args.output}/{filename}_pt_pdf{extension}", pdf_img)
        
        mpc_img = gen_copy_make_border(img, make_pdf=False)
        cv2.imwrite(f"{args.output}/{code}_pt_mpc{extension}", mpc_img)
