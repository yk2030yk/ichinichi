import { ISlackRepository } from '@/domain/interfaces/repository/slack';
import { ISlackPayloadMapper } from '@/useCase/interfaces/mapper/slack';
import { ISlackUseCase } from '@/useCase/interfaces/useCases/slack';
import { DiaryEntry } from '@/useCase/viewModels/diary';

export class SlackUseCase implements ISlackUseCase {
  constructor(
    private slackRepository: ISlackRepository,
    private slackPayloadMapper: ISlackPayloadMapper
  ) {}

  async sendDiaryTimeLine(webhookUrl: string, diaryEntry: DiaryEntry) {
    const payload = this.slackPayloadMapper.createDiaryTimeLinePayload(
      diaryEntry
    );
    await this.slackRepository.sendMessage(webhookUrl, payload);
  }
}
