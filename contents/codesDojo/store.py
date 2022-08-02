productsCodes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
productsQtds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

clientId = int(input("Digite o seu código de cliente: "))
print('-----------------------')
productCode = int(input("Digite o código do produto que você deseja comprar: "))
print('-----------------------')
productRequestQtd = int(input("Digite a quantidade do produto que você deseja comprar: "))

def requestOrder(productCode, productRequestQtd):
	if clientId == 0:
		return "Atendimento encerrado, obrigada! :D"

	index = productsCodes.index(productCode) if productCode in productsCodes else -1

	if index == -1: 
		return "Infelizemente não temos o código do produto solicitado."

	subtractProduct = productsQtds[index] - productRequestQtd
	
	if subtractProduct >= 0:
			productsQtds[index] = subtractProduct
			return "Pedido atendido com sucesso. Volte sempre ;)"
	else:
			return "Não temos estoque suficiente dessa mercadoria."
	

print('-----------------------')
print(requestOrder(productCode, productRequestQtd))

print('')
print('---------Estoque---------')
print('')
for i in range(10):
	print(str(productsCodes[i]) + ' - ' + str(productsQtds[i]))