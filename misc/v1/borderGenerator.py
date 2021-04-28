import os, sys, glob, argparse
from PIL import Image,ImageOps

class Dim:
    def __init__(self, x, y):
        self.x = x
        self.y = y 

    def __str__(self):
        return "{} x {}".format(self.x, self.y)

    def scale(self, percent):
        self.x = int(self.x * (1 + percent))
        self.y = int(self.y * (1 + percent))

class Parser(argparse.ArgumentParser):
    def __init(self, desc):
        super(desc)

    def error(self, message):
        sys.stderr.write('\nERROR: %s\n' % message)
        self.print_help()
        sys.exit(2)


# 2.48" x 3.46"
# 744 x 1038 in 300 dpi
# 1488 x 2076 in 600 dpi
def scaleImages(p):
    SCALE_FACTOR = 0.015
    path = glob.glob(p)
    for infile in path:
        img = Image.open(infile)
        directory = os.path.dirname(infile)
        file_name =  os.path.basename(infile)
        out_path = directory + "/scaled-" + file_name

        cut = Dim(1488, 2076)       # cut dimmension according to MPC
        cut.scale(SCALE_FACTOR)     # scaling to surpass the cut line to hide black edge from scans
        bleed = Dim(1632, 2220)     # bleed dimmension according to MPC

        img = img.resize( (cut.x, cut.y), Image.ANTIALIAS)
        border = Dim( (bleed.x - img.width)//2, (bleed.y - img.height)//2 )
        img = ImageOps.expand(img,border=(border.x,border.y),fill='black')
        img.save(out_path, dpi=(600, 600), quality=90) 

def fitImages(p):
    path = glob.glob(p)
    for infile in path:
        img = Image.open(infile)
        directory = os.path.dirname(infile)
        file_name =  os.path.basename(infile)
        out_path = directory + "/fitted-" + file_name

        cut = Dim(1488, 2076)       # cut dimmension according to MPC
        bleed = Dim(1632, 2220)     # bleed dimmension according to MPC
        diff = Dim(cut.x - img.width, cut.y - img.height)

        if (diff.x < diff.y):       # fit using dimmension "closest" to cut line
            wpercent = (cut.x/float(img.width))
            hsize = int((float(img.height)*float(wpercent)))
            img = img.resize( (cut.x, hsize), Image.ANTIALIAS)

        else:
            hpercent = (cut.y/float(img.height))
            wsize = int((float(img.width)*float(hpercent)))
            img = img.resize( (wsize, cut.y), Image.ANTIALIAS)

        border = Dim( (bleed.x - img.width)//2, (bleed.y - img.height)//2 )
        img = ImageOps.expand(img,border=(border.x,border.y),fill='black')
        img.save(out_path, dpi=(600, 600), quality=90) 


def main():
    parser = Parser(description='Add border to Netrunner card scans')
    optional = parser._action_groups.pop()
    required = parser.add_argument_group('required arguments')
    required.add_argument('-s', metavar='SIZE', required=True, help='scale or fit')
    required.add_argument('PATH', help='Path to image files, eg: ./images/*')
    parser._action_groups.append(optional)
    args = parser.parse_args()

    if args.s == "scale":
        scaleImages(args.PATH)

    if args.s == "fit":
        fitImages(args.PATH)
        

if __name__ == '__main__':
    main()