from os import listdir, rename
from os.path import isfile, join, basename, splitext
import json


path = "C:\\Users\\alexm\\Downloads\\proxynexus_images\\version2\\"
files_list = [f"{path}{f}" for f in listdir(path) if isfile(join(path, f))]
store = []

for f in files_list:
    if 'pdf' not in f:
        continue

    base = basename(f)

    split_f = base.split('_')
    code = split_f[0]
    source = split_f[1]

    new_entry = {
        "pdf": "",
        "pdf_back": "",
        "mpc_fitted": "",
        "mpc_fitted_back": "",
        "mpc_scaled": "",
        "mpc_scaled_back": "",
        "preview": "",
        "preview_back": ""
    }

    def check_and_add(suffixes):
        for key, suffix in zip(new_entry.keys(), suffixes):
            if f"{path}{code}_{source}_{suffix}.jpg" in files_list:
                new_entry[key] = f"{code}_{source}_{suffix}.jpg"

    suffixes = ["pdf", "pdf_back", "fitted", "fitted_back", "scaled", "scaled_back", "prev", "prev_back"]
    check_and_add(suffixes)

    store.append(new_entry)


with open('cardfiles.json', 'w') as fp:
    json.dump(store, fp)

