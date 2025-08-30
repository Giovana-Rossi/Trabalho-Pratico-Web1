
function separarDigitos(string){ 
    return string.split(""); 
}
function converterParaInt(digito){ 
    return parseInt(digito); 
}
function transformarString(string){
    let digitos = separarDigitos(string);
    return digitos.map(converterParaInt);
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
function verificarString(string){
    if (string.includes(";")){
        let partes = string.split(";")
        if(partes.length<2)return false;
        let tamanho = parseInt(partes[0]);
        if(isNaN(tamanho) || tamanho <=0)return false;
        for(let i =1;i<partes.length;i++){
            let pos = partes[i]
            if(pos.length !==2)return false;
            if(isNaN(parseInt(pos[0])) || isNaN(parseInt(pos[1])))return false;
            let linha = parseInt(pos[0]);
            let coluna = parseInt(pos[1]);
            if(linha < 1 || linha > tamanho || coluna < 1 || coluna > tamanho)return false;

        }
        return true
    }
}
function main(){
    let string = prompt("Digite o tamanho da matriz e as posições das bombas de acordo com o modelo proposto")
    if (verificarString(string)){
        let tamanho = parseInt(string.split(";")[0]);
        let campo = gerarCampo(tamanho);
        let listaPosicoesBombas = listaBombas(string)
        campoComBombas = posicionarBombas(campo, listaPosicoesBombas);
        campoFinalizado = detectarBomba(tamanho,campoComBombas)
        console.table(campoFinalizado); }
    else{alert("O modelo inserido é inválido. Use o formato: tamanho;linhaColuna;linhaColuna;...")}
}
main()