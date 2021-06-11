var expect = require('chai').expect;

describe('Main', function () {
  var arr;

  // Roda uma vez, antes do bloco
  before(function () {});

  // Roda uma vez, depois do bloco
  after(function () {});

  // Roda todas as vezes, antes de cada bloco
  beforeEach(function () {
    arr = [1, 2, 3];
  });

  // Roda todas as vezes, depois de cada bloco
  afterEach(function () {});

  // testar tipos ou se existe (smoke test)
  it('should be an array', function () {
    expect(arr).to.be.a('array');
  });

  it('should have a size of 4 when push another value to the array', function () {
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
  });

  it('should have a size of 2 when pop a value from the array', function () {
    arr.pop();
    expect(arr).to.have.lengthOf(2);
  });

  it('should remove the value 3 when use pop in the array', function () {
    arr.pop(); // true
    expect(arr).to.not.include(3);
  });
});

// before
// beforeEach
// test 1
// afterEach
// beforeEach
// test 2
// afterEach
// after

// describe('Main', function () {
//   describe('Method A', function () {
//     context('Case 1', function () {
//       it('should happen blabla', function () {
//         // Espera o que aconteça
//         // Entra de dados / método sum(2, 2)
//         // Espera retornar (4) => true | (3) => false => broken test
//         throw new Error('just an error');
//       });
//     });
//     context('Case 2', function () {
//       it('should happen blabla', function () {
//         // Espera o que aconteça
//         // Entra de dados / método sum(2, 2)
//         // Espera retornar (4) => true | (3) => false => broken test
//         throw new Error('just an error');
//       });
//       it('should happen mimimi', function () {
//         // Espera o que aconteça
//         // Entra de dados / método sum(2, 2)
//         // Espera retornar (4) => true | (3) => false => broken test
//       });
//     });
//   });

//   describe('Method B', function () {});
// });
