import { IDiaryUseCase } from '@/useCase/interfaces/useCases/diary';

export const getDiaryUseCaseMock = (): IDiaryUseCase => ({
  findDiaryByYear: jest.fn(),
  updateDiaryEntry: jest.fn(),
  findDiaryEntryFromDiaryByDate: jest.fn(),
});
