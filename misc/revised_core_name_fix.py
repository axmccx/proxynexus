import json

with open('cards.json', encoding="utf-8") as cards_json:
    cards = json.load(cards_json)

for card in cards['data']:
    if card["pack_code"] == 'core2':
        print(f"pos: {card['position']},  code: {card['code']}, title: {card['title']}")
