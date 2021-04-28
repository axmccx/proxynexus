
entries = []
for i in range(13, 83):
    entry = f'''
        {{
            "code": "310{i}",
            "alts": [
                "310{i}",
            ]
        }},'''
    entries.append(entry)

print("".join(entries))