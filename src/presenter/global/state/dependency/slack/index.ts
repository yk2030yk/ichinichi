import { SlackUseCaseResolver } from '@/application/useCaseResolvers';
import { ISlackUseCase } from '@/useCase/interfaces/useCases/slack';
import { createUseCaseState } from '../useCaseAtom';

export const { selector: slackUseCaseSelector } = createUseCaseState<
  ISlackUseCase
>('slack', new SlackUseCaseResolver());
