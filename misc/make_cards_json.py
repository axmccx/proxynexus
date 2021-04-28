import json

with open('cards.json', encoding="utf-8") as f:
    cards = json.load(f)['data']

card_seed = {}
counter = 1
for card in cards:
    if card['title'] not in card_seed:
        card_seed[card['title']] = {
            "id": counter,
            "title": card['title'],
            "side": card['side_code'],
            "type": card['type_code'],
        }
        counter += 1

card_seed = list(card_seed.values())

with open('card_seed.json', 'w') as f:
    json.dump(card_seed, f)
