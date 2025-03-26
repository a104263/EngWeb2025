# Exercício 1
``db.contratos.find().count()``

# Exercício 2
``db.contratos.find({"tipoprocedimento": "Ajuste Direto Regime Geral"}).count()``

# Exercício 3
``db.contratos.distinct("entidade_comunicante")``

# Exercício 4
``db.contratos.aggregate([{"$group": {"_id": "$tipoprocedimento", "count": {"$sum" : 1}}}])``

# Exercício 5
``db.contratos.aggregate([{"$group": {"_id": "$entidade_comunicante", "count": {"$sum" : "$precoContratual"}}}]).sort({count : -1})``