import json

def open_json(filename):
    with open(filename, 'r', encoding='utf-8') as file:
        data = json.load(file)
    return data 

json_obj = open_json('dataset_reparacoes.json')

map_intervencoes = {}
map_viaturas = {}

for reparacao in json_obj['reparacoes']:
    for intervencao in reparacao['intervencoes']:
        if intervencao['codigo'] not in map_intervencoes.keys():
            map_intervencoes[intervencao['codigo']] = intervencao
    viatura = reparacao['viatura']
    if viatura['matricula'] not in map_viaturas.keys():
        map_viaturas[viatura['matricula']] = viatura

json_obj['intervencoes'] = list(map_intervencoes.values())
json_obj['viaturas'] = list(map_viaturas.values())

with open("dataset_reparacoes_novo.json", "w", encoding="utf-8") as file:
    json.dump(json_obj,file,indent=4, ensure_ascii=False)