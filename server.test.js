import test from 'node:test';
import assert from 'node:assert';

// Простая функция для проверки
function add(a, b) {
  return a + b;
}

test('Проверка сложения двух чисел', () => {
  assert.strictEqual(add(2, 3), 5);
});