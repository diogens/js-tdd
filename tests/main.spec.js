var expect = require("chai").expect;

describe("Main", () => {
  //roda uma vez, ante do bloco
  before(() => {
    //inicia um banco de dados
    //cria um conjunt de banco de daos
  });
  //roda uma vez, depois do bloco
  after(() => {
    //fecha conexão do banco
    //apagar esse conjunto de  dados
  });
  //roda todas as vez, antes do bloco
  beforeEach(() => {
    arr = [1, 2, 3];
  });
  //roda todas as vez, depis do bloco
  afterEach(() => {});

  // testar tipos ou se existe (smoke test)
  it("should be en array", () => {
    expect(arr).to.be.a("array");
  });

  it("should have a size of 4 when push another value to the array", () => {
    arr.push(4); //4
    expect(arr).to.have.lengthOf(4);
    console.log(arr.length);
  });

  it("should have a size of 2 whe pop a value from the array", () => {
    arr.pop();
    expect(arr).to.not.include(3);
  });
  it("should remove the value 3 when use pop in the array", () => {
    console.log(arr.pop() === 3); //true
  });
});

//before
//beforeEach
//test 1
//afterEach
//beforeEach
//test 2
//afterEach
//after
