CustomValidation.prototype.checkValidity = function(input) {

  // In-built validity checks here ------

  // Custom Validity checks ------
  if (!input.value.match(/[a-z]/g)) {
    this.addInvalidity('At least 1 lowercase letter is required');
  }

  if (!input.value.match(/[A-Z]/g)) {
    this.addInvalidity('At least 1 uppercase letter is required');
  }
};