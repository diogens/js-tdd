/* export const sum = (num1, num2) => {
  return num1 + num2;
};
export const sub = (num1, num2) => {
  return num1 - num2;
};
export const mult = (num1, num2) => {
  return num1 * num2;
};
export const div = (num1, num2) => {
  return num2 === 0 ? `não é possivel divisão por zero!` : num1 / num2;
};
 */

const FizzBuzz = num => {
  if (num === 0) return 0;
  if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
  if (num % 3 === 0) return "Fizz";
  if (num % 5 === 0) return "Buzz";

  return num;
};

function foo() {
  return "blabal";
}

export default FizzBuzz;
