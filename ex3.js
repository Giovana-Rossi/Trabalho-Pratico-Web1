
function separarDigitos(string){ 
    return string.split(""); 
}
function converterParaNumero(digito){ 
    return parseInt(digito); 
}
function transformarString(string){
    let digitos = separarDigitos(string);
    return digitos.map(converterParaNumero);
}
function transformarLista(listaDeStrings){ 
    return listaDeStrings.map(transformarString); 
}
function detectarBomba(tamanho, campo){
    for(let i=0;i<tamanho;i++){
        for(let j=0;j<tamanho;j++){
            if(campo[i][j]=='X'){
                if(i+1<tamanho && j+1<tamanho && campo[i+1][j+1]!= 'X')campo[i+1][j+1] += 1
                if(i-1>=0 && j-1>=0 && campo[i-1][j-1]!='X')campo[i-1][j-1] += 1
                if(j+1<tamanho && campo[i][j+1]!='X')campo[i][j+1]+=1
                if(i+1<tamanho && campo[i+1][j]!= 'X')campo[i+1][j]+=1
                if(i-1>=0 && campo[i-1][j]!= 'X')campo[i-1][j] += 1
                if(j-1>=0 && campo[i][j-1]!='X')campo[i][j-1] += 1
                if(i+1<tamanho && j-1>=0 && campo[i+1][j-1]!= 'X')campo[i+1][j-1]+=1
                if(i-1>=0 && j+1<tamanho && campo[i-1][j+1]!='X')campo[i-1][j+1]+=1
            }
        }
    }
    return campo
}
function gerarCampo(tamanho){
    const campo = []
    for(let i=0;i<tamanho;i++){
        linha = []
        for(let j=0;j<tamanho;j++){
             linha.push(0)
        }
        campo.push(linha)
    }
    return campo
}
function listaBombas(string){
    let partes = string.split(";");
    let bombas = partes.slice(1);  
    return transformarLista(bombas)

}
function posicionarBombas(campo,bombas){
    for (let localBomba of bombas){
        let linha = (localBomba[0]-1)
        let coluna = (localBomba[1]-1)
        campo[linha][coluna] = 'X'
        }
    return campo
}

function main(){
    var string = prompt("Digite o tamanho da matriz e as posições das bombas de acordo com o modelo proposto")
    var tamanho = parseInt(string.split(";")[0]);
    var campo = gerarCampo(tamanho);
    let listaPosicoesBombas = listaBombas(string)
    campoComBombas = posicionarBombas(campo, listaPosicoesBombas);
    campoFinalizado = detectarBomba(tamanho,campoComBombas)
    console.log(a)
    console.table(campo); 
}
main()