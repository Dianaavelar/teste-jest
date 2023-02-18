// Função para calcular desconto e frete
const index = require('./calculadora')
test('Aplicar desconto', () => {
    const result = index.aplicarDesconto(10,5);
    expect(result).toEqual(5);
})
test('Somar desconto', () => {
    const result = index.somarDesconto(10,8);
    expect(result).toEqual(18);
})
test('freteGratis é verdadeiro para 200', () => {
  const freteGratis = index.freteGratis(150);
  expect(freteGratis).toBeTruthy()
})