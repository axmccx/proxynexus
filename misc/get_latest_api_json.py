import requests
import json

url = "https://netrunnerdb.com/api/2.0/public/cards"
# url = "https://netrunnerdb.com/api/2.0/public/packs"
file_path = 'cards.json'

response = requests.get(url)

if response.status_code == 200:
    data = response.json()

    with open(file_path, 'w', encoding='utf-8') as file:
        json.dump(data, file, ensure_ascii=False)
    print("Data saved successfully.")
else:
    print(f"Failed to retrieve data: {response.status_code}")
