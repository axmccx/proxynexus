import json

with open('..\\database\\seeders\\jsons\\cards.json', encoding="utf-8") as cards_seed:
    cards_seed = json.load(cards_seed)

with open('..\\database\\seeders\\jsons\\cardfiles.json', encoding="utf-8") as cardfiles_seed:
    cardfiles_seed = json.load(cardfiles_seed)

with open('..\\database\\seeders\\jsons\\packs.json', encoding="utf-8") as packs_seed:
    packs_seed = json.load(packs_seed)

with open('cards.json', encoding="utf-8") as cards_json:
    cards = json.load(cards_json)

with open('altarts.json', encoding="utf-8") as altarts_json:
    altcards = json.load(altarts_json)


id_count = 1
card_printings_json = []

for card in cards['data']:

    new_entry = {
        "id": id_count,
        "code": card["code"],
        "card_id": "",
        "pack_id": "",
        "lm_card_file_id": None,
        "pt_card_file_id": None,
        "de_card_file_id": None
    }
    id_count += 1

    for card_seed in cards_seed:
        if card_seed['title'] == card['title']:
            new_entry['card_id'] = card_seed['id']
            break

    for pack_seed in packs_seed:
        if pack_seed['pack_code'] == card['pack_code']:
            new_entry['pack_id'] = pack_seed['id']


    for cardfile_seed in cardfiles_seed:
        if cardfile_seed['pdf'].startswith(f"{card['code']}_lm"):
            new_entry['lm_card_file_id'] = cardfile_seed['id']

        if cardfile_seed['pdf'].startswith(f"{card['code']}_pt"):
            new_entry['pt_card_file_id'] = cardfile_seed['id']

        if cardfile_seed['pdf'].startswith(f"{card['code']}_de"):
            new_entry['de_card_file_id'] = cardfile_seed['id']

    card_printings_json.append(new_entry)


for altcard in altcards:
    altcode = altcard["code"].replace('-', '')
    new_entry = {
        "id": id_count,
        "code": altcode,
        "card_id": "",
        "pack_id": "",
        "lm_card_file_id": None,
        "pt_card_file_id": None,
        "de_card_file_id": None
    }
    id_count += 1

    # to get card ID, use the first 5 chars of code to get title, then get id
    orig_code = altcard["code"][:5]
    for card in cards['data']:
        if card['code'] == orig_code:
            alttitle = card['title']
            for card_seed in cards_seed:
                if card_seed['title'] == alttitle:
                    new_entry['card_id'] = card_seed['id']
                    break

    for pack_seed in packs_seed:
        if pack_seed['name'] == altcard['title']:
            new_entry['pack_id'] = pack_seed['id']

    for cardfile_seed in cardfiles_seed:
        if cardfile_seed['pdf'].startswith(f"{altcode}_lm"):
            new_entry['lm_card_file_id'] = cardfile_seed['id']

        if cardfile_seed['pdf'].startswith(f"{altcode}_pt"):
            new_entry['pt_card_file_id'] = cardfile_seed['id']

        if cardfile_seed['pdf'].startswith(f"{altcode}_de"):
            new_entry['de_card_file_id'] = cardfile_seed['id']

    card_printings_json.append(new_entry)



with open('cardprintings.json', 'w') as f:
    json.dump(card_printings_json, f)

