from os import listdir, rename
from os.path import isfile, join, basename, splitext
import json


path = "C:\\Users\\alexm\\Downloads\\proxynexus_images\\version2\\"
files_list = [f"{path}{f}" for f in listdir(path) if isfile(join(path, f))]
store = []

count = 0
found_lm_codes = []
found_pt_codes = []
found_de_codes = []
found_os_codes = []


for f in files_list:
    base = basename(f)
    if base == 'runner_back.png' or base == 'corp_back.png':
        continue
    split_f = base.split('_')
    code = split_f[0]
    source = split_f[1]
    if source == 'lm' and code not in found_lm_codes:
        found_lm_codes.append(code)
    elif source == 'pt' and code not in found_pt_codes:
        found_pt_codes.append(code)
    elif source == 'de' and code not in found_de_codes:
        found_de_codes.append(code)
    elif source == 'os' and code not in found_os_codes:
        found_os_codes.append(code)

for code in found_lm_codes:
    count += 1
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
    suffixes = ["pdf", "pdf_back", "fitted", "fitted_back", "scaled", "scaled_back", "prev", "prev_back"]
    for key, suffix in zip(new_entry.keys(), suffixes):
        if f"{path}{code}_lm_{suffix}.jpg" in files_list:
            new_entry[key] = f"{code}_lm_{suffix}.jpg"

    new_entry["id"] = count
    store.append(new_entry)


for code in found_pt_codes:
    count += 1
    new_entry = {
        "pdf": "",
        "pdf_back": "",
        "mpc_fitted": "",
        "mpc_fitted_back": "",
        "preview": "",
        "preview_back": ""
    }
    suffixes = ["pdf", "pdf_back", "mpc", "mpc_back", "prev", "prev_back"]
    for key, suffix in zip(new_entry.keys(), suffixes):
        if f"{path}{code}_pt_{suffix}.jpg" in files_list:
            new_entry[key] = f"{code}_pt_{suffix}.jpg"

    new_entry["mpc_scaled"] = ""
    new_entry["mpc_scaled_back"] = ""
    new_entry["id"] = count
    store.append(new_entry)


for code in found_de_codes:
    count += 1
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
    suffixes = ["pdf", "pdf_back", "fitted", "fitted_back", "scaled", "scaled_back", "prev", "prev_back"]
    for key, suffix in zip(new_entry.keys(), suffixes):
        if f"{path}{code}_de_{suffix}.jpg" in files_list:
            new_entry[key] = f"{code}_de_{suffix}.jpg"

    new_entry["id"] = count
    store.append(new_entry)

for code in found_os_codes:
    count += 1
    new_entry = {
        "pdf": "",
        "pdf_back": "",
        "mpc_fitted": "",
        "mpc_fitted_back": "",
        "preview": "",
        "preview_back": ""
    }
    suffixes = ["pdf", "pdf_back", "mpc", "mpc_back", "prev", "prev_back"]
    for key, suffix in zip(new_entry.keys(), suffixes):
        if f"{path}{code}_os_{suffix}.jpg" in files_list:
            new_entry[key] = f"{code}_os_{suffix}.jpg"

    new_entry["mpc_scaled"] = ""
    new_entry["mpc_scaled_back"] = ""
    new_entry["id"] = count
    store.append(new_entry)


with open('cardfiles.json', 'w') as fp:
    json.dump(store, fp)
