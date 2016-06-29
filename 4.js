input.validity = {  
  valid: false // If the input is valid
  customError: false // If a custom error message has been set
  patternMismatch: false // If the invalidity is against the pattern attribute
  rangeOverflow: false // If the invalidity is against the max attribute
  rangeUnderflow: true // If the invalidity is against the min attribute
  stepMismatch: true // If the invalidity is against the step attribute
  tooLong: false // If the invalidity is against the maxlength attribute
  tooShort: false // If the invalidity is against the minlength attribute
  typeMismatch: false // If the invalidity is against the type attribute
  valueMissing: false // If the input is required but empty
};