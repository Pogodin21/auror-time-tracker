# Правила участия в проекте

## Описание

Этот репозиторий содержит исходный код проекта **Auror Time Tracker** — монорепозитория с фронтендом и бэкендом.  
Пожалуйста, следуйте этим правилам, чтобы поддерживать проект в чистоте и порядке.

---

## 📂 Структура проекта

- `/client` — Фронтенд (React + TypeScript + Vite)
- `/backend` — Бэкенд (планируется в будущем)

---

## 🔀 Правила именования веток

Формат: <scope>/<type>/<short-description>

- **Scopes (Области)**:
  - `frontend` — изменения во фронтенде
  - `backend` — изменения в бэкенде
  - `chore` — технические задачи, настройка, мета-изменения

- **Types (Типы)**:
  - `feature` — добавление новой функциональности
  - `fix` — исправление ошибок
  - `refactor` — рефакторинг кода
  - `docs` — обновление документации

- **Примеры**:
  - `frontend/feature/timer-control`
  - `backend/fix/api-validation`
  - `chore/docs/contributing-guide`

---

## 💬 Правила написания сообщений коммитов (Conventional Commits)

Формат: <type>: <описание изменений>

- **Типы изменений**:
  - `feat:` — добавление новой функциональности
  - `fix:` — исправление ошибок
  - `chore:` — технические задачи, настройки
  - `docs:` — изменения в документации
  - `refactor:` — рефакторинг без изменения поведения
  - `style:` — стилистические изменения (пробелы, форматирование)
  - `test:` — добавление или обновление тестов
  - `ci:` — настройка CI/CD
  - `build:` — изменения в сборке или зависимостях

- **Примеры**:
  - `feat: добавить логику запуска и остановки таймера`
  - `fix: исправить отображение времени на мобильном`
  - `docs: добавить руководство по контрибуции`

---

## ✅ Пример рабочего процесса

1. Создать ветку:  
   `git checkout -b frontend/feature/timer-control dev`

2. Сделать коммит:  
   `git commit -m "feat: add timer start/stop logic"`

3. Отправить ветку:  
   `git push -u origin frontend/feature/timer-control`

4. Открыть Pull Request в ветку `dev`.

---

Удачи и приятной разработки! 🚀




