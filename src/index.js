/**
 * Пример функции для сабстрок (подстрок)
 * @param {string} str - Исходная строка
 * @param {string} sub - Подстрока для поиска
 * @returns {boolean} - Содержит ли строка подстроку
 */
export function containsSub(str, sub) {
  if (typeof str !== 'string' || typeof sub !== 'string') {
    throw new TypeError('Both arguments must be strings');
  }
  return str.includes(sub);
}

export function countSub(str, sub) {
  if (sub === '') return 0;
  let count = 0;
  let pos = 0;
  while ((pos = str.indexOf(sub, pos)) !== -1) {
    count++;
    pos += sub.length;
  }
  return count;
}
