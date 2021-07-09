export class ApplicationExceptionBase extends Error {
  constructor(message?: string) {
    super(`Application Error Occurred.\nDetail: ${message}`);
  }
}
