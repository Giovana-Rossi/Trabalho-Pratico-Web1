
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
function gerarCampo(string){
    var tamanho = parseInt(string.split(";")[0]);
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

//Estou usando a main para testar
function main(){
    var string = "3;22;32"
    var campo = gerarCampo(string);

    let a = listaBombas(string)
   
    campo = posicionarBombas(campo, a);
    console.log(a)
    console.table(campo); 
}
main()