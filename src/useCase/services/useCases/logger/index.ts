/* eslint-disable no-console */
import { ILoggerUseCase } from '@/useCase/interfaces/useCases/logger';

export class LoggerUseCase implements ILoggerUseCase {
  debug(message: string) {
    console.debug(message);
  }

  warn(message: string) {
    console.warn(message);
  }

  error(message: string) {
    console.error(message);
  }

  info(message: string) {
    console.info(message);
  }
}
