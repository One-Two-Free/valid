CustomValidation.prototype.checkValidity = function(input) {

  // Тут идут встроенные проверки валидности

  // А тут специальные
  if (!input.value.match(/[a-z]/g)) {
    this.addInvalidity('At least 1 lowercase letter is required');
  }

  if (!input.value.match(/[A-Z]/g)) {
    this.addInvalidity('At least 1 uppercase letter is required');
  }
};