import os
import cv2
import argparse
import numpy as np
from matplotlib import pyplot as plt

# Assuming 600 dpi
CUT = (1488, 2076)      # Cut dimmension (weight, height) according to MPC
BLEED = (1632, 2220)    # Bleed dimmension (weight, height) according to MPC

# Constants to tweak
BORDER_BLEED = 72       # Probably doesn't need to change
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

def scale_to_cut(img):
    height, width, _ = img.shape
    ratio = CUT[1]/height
    dim = (round(width*ratio), CUT[1])
    return cv2.resize(img, dim, interpolation=cv2.INTER_AREA)

def get_border_dimensions(img):
    """
    return border dimensions in tuple like: (top&bottom, sides)
    """
    height, width, _ = img.shape
    return ((BLEED[1] - height)//2, (BLEED[0] - width)//2)

def gen_inpaint_border(img, inpaint_type=cv2.INPAINT_NS, show_mask=False):
    border_dims = get_border_dimensions(img)
    HB = border_dims[0]
    WB = border_dims[1]
    border_dims = ((border_dims[0], border_dims[0]), (border_dims[1], border_dims[1]), (0, 0))
    img = np.pad(img, border_dims, 'constant', constant_values=255)
    ow, oh, _ = img.shape
    mask = np.zeros((ow, oh), dtype=np.uint8)

    for i in range(0, BORDER_BLEED+HB):
        for y in range(0, oh):
            if(img[i, y, 0] > WHITE_CUTOFF and img[i, y, 1] > WHITE_CUTOFF and img[i, y, 2] > WHITE_CUTOFF):
                mask[i, y] = 255
            if(img[ow-i-1, y, 0] > WHITE_CUTOFF and img[ow-i-1, y, 1] > WHITE_CUTOFF and img[ow-i-1, y, 2] > WHITE_CUTOFF):
                mask[ow-i-1, y] = 255

    for i in range(0, BORDER_BLEED+WB):
        for x in range(0, ow):
            if(img[x, i, 0] > WHITE_CUTOFF and img[x, i, 1] > WHITE_CUTOFF and img[x, i, 2] > WHITE_CUTOFF):
                mask[x, i] = 255
            if(img[x, oh-i-1, 0] > WHITE_CUTOFF and img[x, oh-1-i, 1] > WHITE_CUTOFF and img[x, oh-1-i, 2] > WHITE_CUTOFF):
                mask[x, oh-1-i] = 255

    kernel = np.ones(KERNEL_SIZE, np.uint8)
    mask = cv2.dilate(mask, kernel, iterations=3)
    if show_mask:
        plt.figure("mask")
        plt.imshow(mask)
        plt.show()
    return cv2.inpaint(img, mask, INPAINT_RADIUS, inpaint_type)


def apply_mask(img, mask, x, y):
    for channel in range(3):
        if img[x, y, channel] > WHITE_CUTOFF:
            mask[x, y] = 255

def gen_copy_make_border(img, inpaint_type=cv2.INPAINT_NS, show_mask=False):
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
    result = cv2.inpaint(img, mask, INPAINT_RADIUS, inpaint_type)
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
        # Scale image by height to MPC cut line
        img = scale_to_cut(img)

        # Add border to image using using inpaint with cv2.INPAINT_NS
        img1 = gen_inpaint_border(img, inpaint_type=cv2.INPAINT_NS)

        # Add border to image using using inpaint with cv2.INPAINT_TELEA
        img2 = gen_inpaint_border(img, inpaint_type=cv2.INPAINT_TELEA)

        # Fill in corners using using inpaint with cv2.INPAINT_NS, then apply borders using cv2.copyMakeBorder
        img3 = gen_copy_make_border(img, inpaint_type=cv2.INPAINT_NS)

        # Flip Blue and Green because showing OpenCV image using matplotlib
        img0_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        img1_rgb = cv2.cvtColor(img1, cv2.COLOR_BGR2RGB)
        img2_rgb = cv2.cvtColor(img2, cv2.COLOR_BGR2RGB)
        img3_rgb = cv2.cvtColor(img3, cv2.COLOR_BGR2RGB)

        fig = plt.gcf()
        fig.set_size_inches(32, 18)
        plt.subplot(141), plt.imshow(img0_rgb), plt.title(f'Original \n Dimensions: ({img.shape[:-1]})')
        plt.subplot(142), plt.imshow(img1_rgb), plt.title(f'INPAINT_NS \n Dimensions: ({img1.shape[:-1]})')
        plt.subplot(143), plt.imshow(img2_rgb), plt.title(f'INPAINT_TELEA \n Dimensions: ({img2.shape[:-1]})')
        plt.subplot(144), plt.imshow(img3_rgb), plt.title(f'Corner INPAINT_NS, copyMakeBorder \n Dimensions: ({img3.shape[:-1]})')

        if args.output:
            plt.savefig(f"{args.output}/{os.path.splitext(filename)[0]}_plots.jpg", bbox_inches='tight', dpi=600)
            cv2.imwrite(f"{args.output}/{os.path.splitext(filename)[0]}_INPAINT_NS.jpg", img1)
            cv2.imwrite(f"{args.output}/{os.path.splitext(filename)[0]}_INPAINT_TELEA.jpg", img2)
            cv2.imwrite(f"{args.output}/{os.path.splitext(filename)[0]}_COMBO.jpg", img2)
        else:
            plt.show()

