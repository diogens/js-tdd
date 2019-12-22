/* import { expect } from "chai";
import { sum, sub, mult, div } from "../src/main";

describe("Calc", () => {
  //smoker test
  describe("Smoker test", () => {
    it("should exist the method `sum`", () => {
      expect(sum).to.exist;
      expect(sum).to.be.a("function");
    });
    it("should exist the method `sub`", () => {
      expect(sub).to.exist;
      expect(sub).to.be.a("function");
    });
    it("should exist the method `mult`", () => {
      expect(mult).to.exist;
      expect(mult).to.be.a("function");
    });
    it("should exist the method `div`", () => {
      expect(div).to.exist;
      expect(div).to.be.a("function");
    });
  });

  describe("Func Sum", () => {
    it("should return 4 when `sum(2,2)`", () => {
      expect(sum(2, 2)).to.be.equal(4);
      expect(sub()).to.not.a("string");
    });
  });

  describe("Func Sub", () => {
    it("should return 4 when `sub(2,2)`", () => {
      expect(sub(3, 1)).to.be.equal(2);
      expect(sub()).to.not.a("string");
    });
  });

  describe("Func Mult", () => {
    it("should return when `mult(3,3)`", () => {
      expect(mult(3, 3)).to.be.equal(9);
      expect(sub()).to.not.a("string");
    });
  });

  describe("Func Div", () => {
    it("should return when `div(4,2)`", () => {
      expect(div(4, 2)).to.be.equal(2);
      expect(sub()).to.not.a("string");
    });
    it("should return `não é possivel divisão por zero!` whe divide by 0", () => {
      expect(div(4, 0)).to.be.equal(`não é possivel divisão por zero!`);
    });
  });
});
 */

//============================================================================>
//Escreva uma lib que receba um número e:

//Se o número for divisivel por 3, no lugar do número escreva 'Fizz'
//Se o número for divisivel por 5, no lugar do número escreva 'Buzz'
//Se o número for divisivel por 3 e 5, no lugar do número escreva 'FizzBuzz'
//Se não for múltiplol por 3 e 5, retorna o número

import { expect } from "chai";
import FizzBuzz from "../src/main";

describe("Main", () => {
  it("should return `Fiz` when multiple of 3", () => {
    expect(FizzBuzz(3)).to.be.equal("Fizz");
    expect(FizzBuzz(6)).to.be.equal("Fizz");
    expect(FizzBuzz(9)).to.be.equal("Fizz");
  });

  it("should return `Buzz` when multiple of 5", () => {
    expect(FizzBuzz(5)).to.be.equal("Buzz");
    expect(FizzBuzz(10)).to.be.equal("Buzz");
  });

  it("should return `FizzBuzz` when multiple od 3 and 5", () => {
    expect(FizzBuzz(15)).to.be.equal("FizzBuzz");
  });

  it("should return the number when non-multiple", () => {
    expect(FizzBuzz(7)).to.be.equal(7);
  });

  it("should return 0 when 0", () => {
    expect(FizzBuzz(0)).to.be.equal(0);
  });
});
