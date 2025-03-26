function subtrai(a,b) {
    return a - b
}

function soma(a, b) {
    return a + b
}

function mult(a, b) {
    return a * b
}

function div(a, b) {
    return a / b 
}

function ehPar(num) {
    return num % 2===0
}

function contarCaracteres(texto){
    return(`A string ${texto} possui ${texto.length} caracteres`)
}

function multi(a, b, c) {
    return a * b * c
}

module.exports = {subtrai, soma, mult, div, ehPar, contarCaracteres, multi}