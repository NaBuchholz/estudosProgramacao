// Modelo de objeto
const meuObjeto = {
    chave1: 2, //sempre que uma propriedade for seguida de outra, ela precisa de vírgula ao final
    chave2: "string",
    chave3: true,
    chave4: [],
    chave5: {} //a última propriedade do objeto não precisa de vírgula
}

// Adicionando valores ao objeto
meuObjeto.novaChave = "valor" //notação de ponto
meuObjeto["novaChave"] = "valor" //notação de colchete

// Acessando os valores do objeto
console.log(meuObjeto.chave1) //notação de ponto
console.log(meuObjeto["chave1"]) //notação de colchete
// nas duas formas é necessário que usemos o nome da chave dada

// Exercício 1
const estudante = {
    nome: "Vini",
    sobrenome: "Oliveira",
    matricula: 32481,
    notas: [10, 8, 5]
}

estudante.modulo = "Módulo 1" //notação de ponto
estudante["modulo"] = "Módulo 1" //notação de colchete

// acessar as propriedades
console.log("estudante", estudante)
console.log("nome:", estudante.nome)
console.log("Segunda nota:", estudante.notas[1])
console.log("Módulo:", estudante.modulo)

// criar outro objeto com base no objeto anterior;
const novoEstudante = {
    ...estudante, //espalhamento feito no objeto, para que as alterações feitas no novo objeto não afetem o objeto original
    nome: "Astrodev",
    notas: [...estudante.notas, 9], //espalhamento feito no array do objeto (Assim, caso esse array seja alterado, isso não se refletirá no array do objeto original)
    modulo: "Módulo 2"
}
novoEstudante.notas.push(9) // adicionando mais um elemento ao array do objeto com push
console.log("novo estudante", novoEstudante)
// console.log("estudante", estudante)

// criar um array com os dois estudantes
const estudantesLabenu = [estudante]
estudantesLabenu.push(novoEstudante)

console.log("Estudantes Labenu", estudantesLabenu)

// EXERCÍCIO FINAL

// Exercício 1: criar o objeto carrinho com nome do comprador, forma de pagamento e endereço
const carrinho = {
    nome: "Clara",
    pagamento: "Dinheiro",
    endereco: "Rua dos bobos, nº 0"
}

// Exercício 2: criar uma lista de compras com nome do item, quantidade e valor
carrinho.compras = [
    {
        item: "Caderno",
        valor: 15.00,
        quantidade: 2
    },
    {
        item: "Caneta",
        valor: 3.00,
        quantidade: 5
    },
    {
        item: "Lápis",
        valor: 2.00,
        quantidade: 6
    }
]

// exercício 3

// Imprima a quantidade de compras que existem no carrinho;
const quantidadeItens = carrinho.compras[0].quantidade +carrinho.compras[1].quantidade +carrinho.compras[2].quantidade
console.log("qtd de itens", quantidadeItens)

// Crie uma cópia do objeto, chamada “carrinhoPresente”, que seja igual ao carrinho original, mas com o nome da pessoa alterado para o nome de uma pessoa que você gosta, e a forma de pagamento alterada para cartão presente

const carrinhoPresente = {
    ...carrinho,
    nome: "Yuzo",
    pagamento: "Cartão presente"
}

console.log("Carrinho Presente",carrinhoPresente)