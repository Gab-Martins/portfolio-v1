# name = str(input("Qual seu nome? "))
# idade= int(input("Idade? "))
# saldo = float(input("Saldo bancário? "))

# print(f"Olá {name}, você tem {idade} anos e seu saldo bancário atualmente é de R$ {saldo:.2f}")

# if saldo >= 1000:
#     print("Boa reserva")
# elif saldo >= 100:
#     print("Cuidado , saldo razoável")
# else:
#     print("Alerta! Saldo muito baixo!")

# Imagine que uma pessoa decidiu guardar R$50 por mês durante 12 meses.
# O objetivo é mostrar quanto ela terá acumulado ao final de cada mês.

for mes in range(1, 13): # pyright: ignore[reportUndefinedVariable]
    saldo = mes*50
    print(f"Mês {mes} = R$ {saldo}") # type: ignore

mes = 1
saldo = 0

while mes < 13:
    saldo += 50
    print(f"Mês {mes}, saldo R$ {saldo}") # pyright: ignore[reportUndefinedVariable]
    mes += 1