/**
 * Калькулятор с поддержкой базовых операций и историей
 */
export class Calculator {
  #history = [];

  /**
   * @returns {string[]} История операций
   */
  get history() {
    return [...this.#history];
  }

  /**
   * Сложение двух чисел
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  add(a, b) {
    const result = a + b;
    this.#history.push(`${a} + ${b} = ${result}`);
    return result;
  }

  /**
   * Деление двух чисел
   * @param {number} a
   * @param {number} b
   * @returns {number}
   * @throws {Error} При делении на ноль
   */
  divide(a, b) {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    const result = a / b;
    this.#history.push(`${a} / ${b} = ${result}`);
    return result;
  }

  /**
   * Возведение в степень
   * @param {number} base
   * @param {number} exponent
   * @returns {number}
   */
  power(base, exponent) {
    const result = Math.pow(base, exponent);
    this.#history.push(`${base} ^ ${exponent} = ${result}`);
    return result;
  }

  /**
   * Квадратный корень
   * @param {number} a
   * @returns {number}
   * @throws {RangeError} Для отрицательных чисел
   */
  squareRoot(a) {
    if (a < 0) {
      throw new RangeError('Negative numbers not allowed');
    }
    const result = Math.sqrt(a);
    this.#history.push(`sqrt(${a}) = ${result}`);
    return result;
  }

  /**
   * Очистка истории
   */
  clearHistory() {
    this.#history = [];
  }
}
