import pandas as pd

# criando um dicionário

data = {
    "Produto": ["Arroz", "Feijão", "Leite", "Pão"],
    "Quantidade": [2, 1, 3, 5],
    "Preço Unitário": [20.0, 7.5, 4.0, 2.5]
}

#Criando o Data Frame 

df = pd.DataFrame(data)

#Preço de cada item

df["Preço Total"] = df["Quantidade"]* df["Preço Unitário"]

print(df) # type: ignore

total = df["Preço Total"].sum()
print(f"Total gasto R$ {total:.2f}") # pyright: ignore[reportUndefinedVariable]

mais_caro = df.loc[df["Preço Unitário"].idxmax()]["Produto"]
mais_barato = df.loc[df["Preço Unitário"].idxmin()]["Produto"]
media = df["Preço Unitário"].mean()

print(f"O produto mais caro é {mais_caro}") # type: ignore
print(f"O produto mais barato é {mais_barato}") # type: ignore
print(f"A média dos valores é R$ {media:.2f}") # type: ignore