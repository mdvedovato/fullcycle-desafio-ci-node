
const soma = require('./index');

test('soma de 3 e 6 deve ser igual a 9', () => {
  expect(soma(3, 6)).toBe(9);
});
