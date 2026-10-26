# Лабораторна робота №1 — StudyPlanner

**Курс:** Технології створення програмних продуктів
**Тема:** Технічне завдання, вибір моделі життєвого циклу, визначення версій, розробка шаблонів
**Студент:** Глибченко Назар, ІФКЕП

## Про проєкт
StudyPlanner — невеликий веб-застосунок для обліку студентських дедлайнів. Повний опис — у [TZ.md](TZ.md).

## Структура репозиторію
```
lab-glybchenko-nazar/
├─ TZ.md                    технічне завдання
├─ VERSIONING.md            модель життєвого циклу, SemVer, GitFlow
├─ RELEASE_TEMPLATE.md      шаблон release notes
├─ CHANGELOG.md             історія змін (Keep a Changelog)
├─ ACCEPTANCE_CHECKLIST.md  чекліст приймання фічі
├─ README.md
├─ package.json
├─ src/                     код (deadlines.js, reminders.js)
└─ test/                    юніт-тести
```

## Обраний життєвий цикл
Agile (Scrum), спринт 1 тиждень. Обґрунтування, артефакти й ризики — у [VERSIONING.md](VERSIONING.md), розділ 1.

## Як запустити та перевірити
Потрібен Node.js 18+.

```bash
npm test
```

Перевірка git-історії:

```bash
git log --oneline --graph --all   # гілки, merge-коміти
git branch -a                     # main, develop, feature/*
git tag                           # v1.0.0
git show v1.0.0                   # анотований тег релізу
```

## Демонстрація Git
1. Гілка `develop` створена від `main`.
2. Дві фічі розроблені в окремих гілках: `feature/add-deadline-list` та `feature/add-reminders`.
3. Обидві злиті в `develop` з `--no-ff`.
4. `develop` злитий у `main`, поставлено тег `v1.0.0`.

## Висновки
- Чіткий ТЗ із критеріями приймання спрощує перевірку готовності фічі.
- Для однієї людини достатньо спрощеного GitFlow без постійних release-гілок.
- CHANGELOG разом із тегами дають єдине джерело історії релізів.
