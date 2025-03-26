const { subtrai, soma, mult, div, ehPar, contarCaracteres, multi} = require('../src/calculadora');


test('A função subtrai deve retornar 5 ao subtrair 10 e 5', () => {
    expect(subtrai(10, 5)).toBe(5)
});

test('Deve somar dois números', () => {
    expect(soma(15, 5)).toBe(20)
});

test('Deve multiplicar dois números', () => {
    expect(mult(5, 5)).toBe(25)
});

test('Deve dividir dois núemros', () => {
    expect(div(10, 5)).toBe(2)
});

test('A função ehPar deve afirmar que o número 6 é par', () => {
    expect(ehPar(6)).toBe(true);
});

test('A função ehPar deve afirmar que o número 9 não é par', () => {
    expect(ehPar(9)).toBe(false);
});

test('A função contarCaracteres deve retornar que a string "Tecnologia" possui 9 caracteres', () => {
    expect(contarCaracteres("Tecnologia")).toBe("A string Tecnologia possui 10 caracteres");
});

test('Deve multiplicar dois números', () => {
    expect(mult(2.5, 3.8)).toBe(9.5)
});

test('Deve multiplicar dois números', () => {
    expect(mult(4.2, 5)).toBe(21)
});

test('Deve multiplicar três números', () => {
    expect(multi(1.5, 2.0, 3.5)).toBe(10.5)
});