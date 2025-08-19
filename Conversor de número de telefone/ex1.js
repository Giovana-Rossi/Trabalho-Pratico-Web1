//Crie um website HTML que recebe uma string do usuário (prompt) e que converte
//a string para o seu correspondente número seguindo o teclado de celulares físicos mencionados.

function conversor(string) {
    var stringNova = "";
    for(i = 0; i < string.length; i++) {
        var caractere = string[i];
        if(caractere == "a" || caractere == "b" || caractere == "c") {
            stringNova += 2;
        }
        if(caractere == "d" || caractere == "e" || caractere == "f") {
            stringNova += 3;
        }
        if(caractere == "g" || caractere == "h" || caractere == "i") {
            stringNova += 4;
        }
        if(caractere == "j" || caractere == "k" || caractere == "l") {
            stringNova += 5;
        }
        if(caractere == "m" || caractere == "n" || caractere == "o") {
            stringNova += 6;
        }
        if(caractere == "p" || caractere == "q" || caractere == "r" || caractere == "s") {
            stringNova += 7;
        }
        if(caractere == "t" || caractere == "u" || caractere == "v") {
            stringNova += 8;
        }
        if(caractere == "w" || caractere == "x" || caractere == "y" || caractere == "z") {
            stringNova += 9;
        }
    }
    return stringNova;
}

function main() {
    var string = prompt("Insira uma frase qualquer: ").toLowerCase();
    console.log(string)
    var numeros = conversor(string);
    console.log(numeros);
}

main()