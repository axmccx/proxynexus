import json

with open('cards.json', encoding="utf-8") as f:
    cards = json.load(f)['data']

card_seed = {}
for i, card in enumerate(cards, start=1):
    if card['title'] not in card_seed:
        card_seed[card['title']] = {
            "id": i,
            "title": card['title'],
            "side": card['side_code'],
            "type": card['type_code'],
        }

card_seed = list(card_seed.values())

with open('card_seed.json', 'w', encoding='utf8') as f:
    json.dump(card_seed, f, ensure_ascii=False)
