import json

def add_id(filename, newfilename):
    with open(filename, encoding="utf-8") as seed_json:
        cards = json.load(seed_json)

    new_json = []
    for i, entry in enumerate(cards):
        new_json.append({
            **entry,
            "id": i+1
        })

    with open(newfilename, 'w') as f:
        json.dump(new_json, f)


add_id("..\\database\\seeders\\jsons\\packs.json", "..\\database\\seeders\\jsons\\packs_new.json")