// module.exports = {
//   sum: function (num1, num2) {
//     return num1 + num2;
//   },
//   sub: function (num1, num2) {
//     return num1 - num2;
//   },
//   mult: function (num1, num2) {
//     return num1 * num2;
//   },
//   div: function (num1, num2) {
//     return num2 === 0 ? 'Não é possivel divisão por zero!' : num1 / num2;
//   },
// };

const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mult = (num1, num2) => num1 * num2;
const div = (num1, num2) =>
  num2 === 0 ? 'Não é possivel divisão por zero!' : num1 / num2;

export { sum, sub, mult, div };
