import json 

f = open("cinema.json", encoding='utf-8')
bd = json.load(f)
f.close()

for i, reg in enumerate(bd['filmes']):
    reg['id'] = str(i)

f = open("cinema.json", "w", encoding='utf-8')
json.dump(bd, f, indent=2, ensure_ascii=False)
f.close()