import json

with open('altarts.json', encoding="utf-8") as f:
    altarts = json.load(f)

new_packs = {}
counter = 1

for card in altarts:
    if card['title'] not in new_packs:
        new_packs[card['title']] = {
            "pack_code": f"altpack{counter}",
            "name": card['title'],
            "is_core": False,
            "is_visible": False
        }

        counter += 1


new_packs = list(new_packs.values())

with open('altpacks.json', 'w') as f:
    json.dump(new_packs, f)
