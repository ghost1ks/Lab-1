'use strict';

const test = require('node:test');
const assert = require('node:assert');
const { createTask, sortByDeadline, isOverdue } = require('../src/deadlines');

test('TC-1: порожня назва викликає помилку', () => {
  assert.throws(() => createTask({ title: '  ', deadline: '2026-11-01' }));
});

test('TC-2: список сортується за зростанням дедлайну', () => {
  const a = createTask({ title: 'A', deadline: '2026-11-10' });
  const b = createTask({ title: 'B', deadline: '2026-11-01' });
  const c = createTask({ title: 'C', deadline: '2026-11-05' });
  assert.deepStrictEqual(sortByDeadline([a, b, c]).map((t) => t.title), ['B', 'C', 'A']);
});

test('isOverdue: прострочене невиконане завдання', () => {
  const t = createTask({ title: 'Old', deadline: '2026-01-01' });
  assert.strictEqual(isOverdue(t, new Date('2026-02-01')), true);
  t.done = true;
  assert.strictEqual(isOverdue(t, new Date('2026-02-01')), false);
});
