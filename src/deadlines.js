'use strict';

/**
 * Створює завдання. Кидає помилку, якщо назва порожня або дедлайн некоректний.
 */
function createTask({ title, subject = '', deadline, priority = 'normal' }) {
  if (!title || !title.trim()) {
    throw new Error('Назва завдання не може бути порожньою');
  }
  const date = new Date(deadline);
  if (Number.isNaN(date.getTime())) {
    throw new Error('Некоректний дедлайн');
  }
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    title: title.trim(),
    subject,
    deadline: date.toISOString(),
    priority,
    done: false,
  };
}

function sortByDeadline(tasks) {
  return [...tasks].sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
}

function isOverdue(task, now = new Date()) {
  return !task.done && new Date(task.deadline) < now;
}

module.exports = { createTask, sortByDeadline, isOverdue };
