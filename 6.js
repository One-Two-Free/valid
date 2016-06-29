CustomValidation.prototype.getInvaliditiesForHTML = function() {
  return this.invalidities.join('. <br>');
}

// Добавляем обработчик клика на кнопку отправки формы
submit.addEventListener('click', function(e) {
  // Пройдёмся по всем полям
  for (var i = 0; i < inputs.length; i++) {

    var input = inputs[i];

    // Проверим валидность поля, используя встроенную в JavaScript функцию checkValidity()
    if (input.checkValidity() == false) {

      var inputCustomValidation = new CustomValidation(); // Создадим объект CustomValidation
      inputCustomValidation.checkValidity(input); // Выявим ошибки
      var customValidityMessage = inputCustomValidation.getInvalidities(); // Получим все сообщения об ошибках
      input.setCustomValidity(customValidityMessage); // Установим специальное сообщение об ошибке

      // Добавим ошибки в документ
      var customValidityMessageForHTML = inputCustomValidation.getInvaliditiesForHTML();
      input.insertAdjacentHTML('afterend', '<p class="error-message">' + customValidityMessageForHTML + '</p>')
      stopSubmit = true;

    } // закончился if
  } // закончился цикл

  if (stopSubmit) {
    e.preventDefault();
  }
});