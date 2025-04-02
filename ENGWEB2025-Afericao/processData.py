import json
import re

with open("dataset.json", 'r', encoding='utf-8') as file:
    data = json.load(file)

# Função para limpar cada string
def clean_string(s):
    # Remove todos os caracteres especiais (\', \", etc.)
    cleaned = re.sub(r"[\"'\\\[\]]", "", s)
    # Remove espaços extras no início e no final
    cleaned = cleaned.strip()
    return cleaned


for livro in data:
    genres = str(livro['genres'])
    genres = genres[2:-2]
    lista = genres.split(',')
    cleaned_genres = [clean_string(g) for g in lista]
    livro['genres'] = cleaned_genres
    characters = str(livro['characters'])
    characters = characters[2:-2]
    listaC = characters.split(',')
    cleaned_characters = [clean_string(c) for c in listaC]
    livro['characters'] = cleaned_characters
    authors = str(livro['author'])
    authorsList = authors.split(',')
    cleaned_authors = [clean_string(a) for a in authorsList]
    livro['author'] = cleaned_authors
    livro['_id'] = livro['bookId']


with open('dataset.json', 'w', encoding='utf-8') as file:
    json.dump(data, file, ensure_ascii=False, indent=4)