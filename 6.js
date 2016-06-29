CustomValidation.prototype.getInvaliditiesForHTML = function() {
  return this.invalidities.join('. <br>');
}

// On click of form submit buttons
submit.addEventListener('click', function(e) {
  // Loop through all inputs
  for (var i = 0; i < inputs.length; i++) {

    var input = inputs[i];

    // Use native JavaScript checkValidity() function to check if input is valid
    if (input.checkValidity() == false) {

      var inputCustomValidation = new CustomValidation(); // New instance of CustomValidation
      inputCustomValidation.checkValidity(input); // Check Invalidities
      var customValidityMessage = inputCustomValidation.getInvalidities(); // Get custom invalidity messages
      input.setCustomValidity(customValidityMessage); // set as custom validity message

      // DISPLAY ERROR MESSAGES IN DOCUMENT
      var customValidityMessageForHTML = inputCustomValidation.getInvaliditiesForHTML();
      input.insertAdjacentHTML('afterend', '<p class="error-message">' + customValidityMessageForHTML + '</p>')
      stopSubmit = true;

    } // end if
  } // end loop

  if (stopSubmit) {
    e.preventDefault();
  }
});