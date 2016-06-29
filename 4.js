input.validity = {  
  valid: false // Поле валидно
  customError: false // Установленно специальное сообщение ошибки
  patternMismatch: false // Значение не удовлетворяет шаблону, установленному в атрибуте pattern
  rangeOverflow: false // Значение превосходит атрибут max
  rangeUnderflow: true // Значение меньше атрибута min
  stepMismatch: true // Значение не соответствует указаному шагу
  tooLong: false // Значение слишком длинное
  tooShort: false // Значение слишком короткое
  typeMismatch: false // Значение не соответствует указаному атрибуту type
  valueMissing: false // Отсутствует обязательное значение
};