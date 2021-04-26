import json
from os import listdir

with open('cardprintings.json', encoding="utf-8") as f:
    cardprintings = json.load(f)

path = "C:\\Users\\alexm\\Downloads\\proxynexus_images\\images - Copy"
files_list = [f"{f[:-4].replace('-', '')}" for f in listdir(path)]


print("cardprinting codes missing from files")
cardprintings_codes = []
for entry in cardprintings:
    cardprintings_codes.append(entry['code'])
    if entry['code'] not in files_list:
        print(entry['code'])

print("files missing from cardprinting codes")
for _file in files_list:
    if _file not in cardprintings_codes:
        print(_file)
