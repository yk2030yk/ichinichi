import { ISlackRepository } from '@/domain/interfaces/repository/slack';
import { ISlackPayloadMapper } from '@/useCase/interfaces/mapper/slack';
import { ISlackUseCase } from '@/useCase/interfaces/useCases/slack';

export class SlackUseCase implements ISlackUseCase {
  constructor(
    private slackRepository: ISlackRepository,
    private slackPayloadMapper: ISlackPayloadMapper
  ) {}

  async sendDiaryTimeLine(webhookUrl: string, message: string) {
    const payload = this.slackPayloadMapper.createDiaryTimeLinePayload(message);
    await this.slackRepository.sendMessage(webhookUrl, payload);
  }
}
