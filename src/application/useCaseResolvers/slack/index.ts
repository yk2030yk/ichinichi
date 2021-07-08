import { SlackRepository } from '@/domain/services/repository/slack';
import { SlackPayloadMapper } from '@/useCase/services/mapper/slack';
import { SlackUseCase } from '@/useCase/services/useCases/slack';

export class SlackUseCaseResolver {
  resolve() {
    return new SlackUseCase(new SlackRepository(), new SlackPayloadMapper());
  }
}
