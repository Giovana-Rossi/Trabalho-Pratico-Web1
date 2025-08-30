/*
[id, nome, pago|nao-pago, [[nome item, valor item, tipo item], ...]]
*/
const central_produtos = []
const pedidos = [
    [1, "Alice", true, [["Teclado Mecânico", 300, "Periféricos"], ["Mouse Gamer", 200, "Periféricos"]]],
    [2, "Bruno", false, [["Monitor 27''", 1500, "Monitores"]]],
    [3, "Carla", true, [["Notebook i7", 4800, "Computadores"]]],
    [4, "Daniel", true, [["Cadeira Gamer", 1200, "Móveis"], ["Mousepad XL", 100, "Acessórios"]]],
    [5, "Eduarda", true, [["Monitor Ultrawide", 2500, "Monitores"], ["Suporte para Monitor", 300, "Acessórios"]]],
    [6, "Fernando", true, [["Placa de Vídeo RTX 4060", 3200, "Hardware"]]],
    [7, "Gabriela", false, [["Impressora", 800, "Periféricos"]]],
    [8, "Henrique", true, [["Gabinete RGB", 600, "Hardware"], ["Fonte 750W", 700, "Hardware"]]],
    [9, "Isabela", true, [["SSD 1TB", 900, "Armazenamento"], ["Memória RAM 16GB", 500, "Hardware"]]],
    [10, "João", true, [["Headset Sem Fio", 650, "Periféricos"]]]
];

//1
pedidos.map((pedidos) => {
    let nome = pedidos[1];
    let valor = pedidos[3].reduce((acumuladora, produto) => acumuladora + produto[1], 0);

    console.log(`Cliente: ${nome}, total: R$ ${valor}`);
});

//2
function existe_produto(produto) {
    for (let i = 0; i < central_produtos.length; i++) {
        if (central_produtos[i][0] === produto[0]) {
            return true;
        }
    }
    return false;
}

var i = 0;
while (i < pedidos.length) {
    var produtos = pedidos[i][3]; 
    var j = 0;
    while (j < produtos.length) {
        var produto = produtos[j]; 
        if (!existe_produto(produto)) { 
            central_produtos.push(produto);
        }
        j++;
    }
    i++;
}
    central_produtos.sort((a, b) => b[1] - a[1]);
    console.log(central_produtos);
//3

i = 0;
var soma = 0;
while (i < pedidos.length) {
    if (pedidos[i][2] === true) { 
        var produtos = pedidos[i][3]; 
        var j = 0;
        while (j < produtos.length) {
            soma += produtos[j][1]; 
            j++;
        }
    }
    i++;
}
console.log("Total de compras pagas:", soma)

//4 
i = 0;
while (i < pedidos.length) {
    if (pedidos[i][2] === false) {
        var produtos = pedidos[i][3]; 
        var j = 0;
        var totalDivida = 0; 
        while (j < produtos.length) {
            totalDivida += produtos[j][1]; 
            j++;
        }
        console.log(`Devedor: ${pedidos[i][1]}, valor devido: R$ ${totalDivida}`);
    }
    i++;
}
