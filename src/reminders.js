'use strict';

const DAY_MS = 24 * 60 * 60 * 1000;

/**
 * Повертає невиконані завдання, дедлайн яких настає протягом наступних 24 годин
 * (прострочені не включаються).
 */
function getReminders(tasks, now = new Date()) {
  return tasks.filter((t) => {
    if (t.done) return false;
    const diff = new Date(t.deadline) - now;
    return diff >= 0 && diff <= DAY_MS;
  });
}

function saveTasks(tasks, storage = globalThis.localStorage) {
  storage.setItem('studyplanner.tasks', JSON.stringify(tasks));
}

function loadTasks(storage = globalThis.localStorage) {
  const raw = storage.getItem('studyplanner.tasks');
  return raw ? JSON.parse(raw) : [];
}

module.exports = { getReminders, saveTasks, loadTasks };
