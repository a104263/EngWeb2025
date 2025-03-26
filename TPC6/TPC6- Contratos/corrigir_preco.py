import json

with open("contratos.json", 'r', encoding='utf-8') as file:
    data = json.load(file)

for contrato in data:
    preco = str(contrato['precoContratual'])
    if ',' in preco:
        contrato['precoContratual'] = preco.replace(',', '.')

with open('contratos.json', 'w', encoding='utf-8') as file:
    json.dump(data, file, ensure_ascii=False, indent=4)