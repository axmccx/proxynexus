from PIL import Image

def extract_inner_pictures(input_image_path, output_folder, start_x, start_y, inner_width, inner_height):
    try:
        # Open the input image
        img = Image.open(input_image_path)

        # Calculate the number of inner pictures in rows and columns
        rows = 3
        cols = 3

        # Iterate through rows and columns to extract inner pictures
        for row in range(rows):
            for col in range(cols):
                # Calculate the coordinates of the current inner picture
                left = start_x + col * (inner_width - 1)  # Adding 1 pixel spacing between inner pictures
                upper = start_y + row * (inner_height - 1)  # Adding 1 pixel spacing between inner pictures
                right = left + inner_width
                lower = upper + inner_height

                # Crop and save the current inner picture
                inner_img = img.crop((left, upper, right, lower))
                output_path = f"{output_folder}/inner_{row}_{col}.png"
                inner_img.save(output_path)

                print(f"Extracted inner_{row}_{col}.png")

        print("Extraction completed.")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    input_image_path = input("Enter the input image path: ")
    output_folder = input("Enter the output folder path: ")
    start_x = int(input("Enter the starting X-coordinate: "))
    start_y = int(input("Enter the starting Y-coordinate: "))
    inner_width = int(input("Enter the width of inner pictures: "))
    inner_height = int(input("Enter the height of inner pictures: "))

    extract_inner_pictures(input_image_path, output_folder, start_x, start_y, inner_width, inner_height)
