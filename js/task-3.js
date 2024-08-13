function getElementWidth(content, padding, border) {
  // Функція для витягання числового значення з рядка
  function extractValue(pxString) {
    return parseFloat(pxString); // parseFloat обробляє як цілі, так і дробові числа
  }

  // Витягаємо числові значення з параметрів
  const contentWidth = extractValue(content);
  const paddingWidth = extractValue(padding);
  const borderWidth = extractValue(border);
  
  // Розраховуємо загальну ширину
  const totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;
  
  return totalWidth;
}

// Перевірка функції
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
