// Тип never используется, когда функция гарантированно ничего не возвращает. Например, если внутри функции есть бесконечный цикл:
function infiniteLoop(): never {
  while (true) {
    // Какая-то логика
  }
}

// Еще тип never используется, если функция выбрасывает исключение:
function stop(message: string): never {
  throw new Error(message);
}

// Также тип never используется, когда функция завершает программу:
function exit(code: number = 0): never {
  process.exit(code);
}
