import { SlackUseCaseResolver } from '@/application/useCaseResolvers';
import { ISlackUseCase } from '@/useCase/interfaces/useCases/slack';
import { createUseCaseState } from '../useCaseAtom';

export const {
  atom: slackUseCaseAtom,
  selector: slackUseCaseSelector,
} = createUseCaseState<ISlackUseCase>('slack', new SlackUseCaseResolver());
