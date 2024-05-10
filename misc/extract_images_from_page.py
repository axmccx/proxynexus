from PIL import Image


def extract_images(filename, page_num):
    img = Image.open(filename)

    step_x, step_y = 744, 1031
    border = 76

    rows, cols = 3, 3
    for i in range(0, rows):
        for j in range(0, cols):
            left = (j * step_x) + border
            upper = (i * step_y) + border
            right = left + step_x
            lower = upper + step_y

            # Crop the image
            cropped_img = img.crop((left, upper, right, lower))
            image_count = 1 + j + (i*3) + ((page_num-1)*9)
            cropped_img.save(f"C:\\Users\\alexm\\Desktop\\rwr pages\\cropped\\{image_count}.jpg", subsampling=0, quality=100)


for page_count in range(1, 9):
    extract_images(f'C:\\Users\\alexm\\Desktop\\rwr pages\\{page_count}.jpg', page_count)
