class Produto:
    def__init__(self, id, descricao, ativo, estoque, preco, atributo1, atributo2):
        self.id = 1
        self.descricao = 
        self.ativo = ativo
        self.estoque = estoque
        self.preco = preco
        self.tipo = tipo
        self.pags = pags

    def ativar(self):
        self.ativo = True

    def retirarEstoque(self):
        if self.estoque > 0:
            self.estoque -= 1

    def incluirEstoque(self, quantidade):
        if self.estoque + quantidade <= 10:
            self.estoque += quantidade
        else:
            print("O estoque não pode exceder 10 unidades.")

//# Criação dos objetos de Produto//
produto1 = Produto(1, "Livro As aventuras de Nibão", True, 10, 30.00, "atributo1_valor1", "atributo2_valor1")
produto2 = Produto(2, "Livro O romance perfeito", True, 10, 40.00, "atributo1_valor2", "atributo2_valor2")
produto3 = Produto(3, "Livro As tentativas de Roubo a Ilha Perdida", True, 10, 120.00, "atributo1_valor3", "atributo2_valor3")
produto4 = Produto(4, "Praia Perfeita", True, 10, 20.00, "atributo1_valor4", "atributo2_valor4")
produto5 = Produto(5, "Fim de verão", True, 10, 25.00, "atributo1_valor5", "atributo2_valor5")

//# Simulação dos movimentos de compra//
movimentos_compra = 5

for i in range(movimentos_compra):
    print("Movimento de compra", i+1)
    print("Produto:", produto1.descricao)
    print("Preço:", produto1.preco)
    print("Estoque antes da compra:", produto1.estoque)

    valor_total_compra = 0

    quantidade_compra = int(input("Digite a quantidade a ser comprada: "))
    if quantidade_compra <= produto1.estoque:
        produto1.retirarEstoque()
        valor_total_compra = quantidade_compra * produto1.preco
        print("Valor total da compra:", valor_total_compra)
    else:
        print("Estoque insuficiente.")

    print("Estoque atual:", produto1.estoque)
    print()

//# Solicitação de incluirEstoque conforme a necessidade do estoque final//
quantidade_incluir_estoque = 10 - produto1.estoque
produto1.incluirEstoque(quantidade_incluir_estoque)

print("Estoque final:", produto1.estoque)