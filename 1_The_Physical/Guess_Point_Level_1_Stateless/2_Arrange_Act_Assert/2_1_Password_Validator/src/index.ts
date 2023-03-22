export interface ErrorItem {
  type: string; 
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ErrorItem[]
}

export class PasswordValidator {
  private hasMinimumLength(password: string): boolean {
    return password.length >= 5;
  }

  private hasMaximumLength(password: string): boolean {
    return password.length <= 15;
  }

  private hasDigit(password: string): boolean {
    return (/[0-9]/g).test(password);
  }

  private hasUpperCaseLetter(password: string): boolean {
    return (/[A-Z]/).test(password);
  }

  validate(password: string): ValidationResult {
    const validationResult = {
      isValid: true, 
      errors: [] as ErrorItem[]
    }

    if (!this.hasMinimumLength(password)) {
      validationResult.errors.push({
        type: 'MIN_LENGTH_ERROR',
        message: "A password must have a minimum length of 5 characters"
      })
    }

    if (!this.hasMaximumLength(password)) {
      validationResult.errors.push({
        type: 'MAX_LENGTH_ERROR',
        message: "A password must have a maximum length of 15 characters"
      });
    }

    if (!this.hasDigit(password)) {
      validationResult.errors.push({
        type: 'NO_DIGIT_ERROR',
        message: "A password must contain at least 1 digit"
      });
    }

    if (!this.hasUpperCaseLetter(password)) {
      validationResult.errors.push({
        type: 'NO_UPPERCASE_LETTER_ERROR',
        message: 'A password must contain at least 1 uppercase letter'
      });
    }

    if (validationResult.errors.length !== 0) {
      validationResult.isValid = false;
    }

    return validationResult;
  }
}