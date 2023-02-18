// Testes para calcular desconto e frete
const index = require('./calculadora')
test('Aplicar desconto', () => {
    const result = index.aplicarDesconto(10,5);
    expect(result).toEqual(5);
})
test('Somar desconto', () => {
    const result = index.somarDesconto(10,8);
    expect(result).toEqual(18);
})
