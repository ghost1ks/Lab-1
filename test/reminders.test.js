'use strict';

const test = require('node:test');
const assert = require('node:assert');
const { getReminders, saveTasks, loadTasks } = require('../src/reminders');

const now = new Date('2026-11-01T12:00:00Z');
const task = (title, deadline, done = false) => ({ title, deadline, done });

test('TC-3: дедлайн через 23 год потрапляє у нагадування', () => {
  const t = task('A', '2026-11-02T11:00:00Z');
  assert.strictEqual(getReminders([t], now).length, 1);
});

test('TC-4: дедлайн через 25 год не потрапляє у нагадування', () => {
  const t = task('B', '2026-11-02T13:00:00Z');
  assert.strictEqual(getReminders([t], now).length, 0);
});

test('виконані та прострочені завдання не нагадуються', () => {
  const done = task('C', '2026-11-02T00:00:00Z', true);
  const late = task('D', '2026-10-30T00:00:00Z');
  assert.strictEqual(getReminders([done, late], now).length, 0);
});

test('TC-5: збереження і завантаження між сеансами', () => {
  const store = new Map();
  const storage = {
    setItem: (k, v) => store.set(k, v),
    getItem: (k) => (store.has(k) ? store.get(k) : null),
  };
  const tasks = [task('E', '2026-11-05T00:00:00Z')];
  saveTasks(tasks, storage);
  assert.deepStrictEqual(loadTasks(storage), tasks);
  assert.deepStrictEqual(loadTasks({ getItem: () => null }), []);
});
