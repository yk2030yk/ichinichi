import { ISlackRepository } from '@/domain/interfaces/repository/slack';

const SLACK_WEBHOOK_REGEX = /https:\/\/hooks.slack.com\/services\/.+\/.+\/.+/;

export class SlackRepository implements ISlackRepository {
  testWebhookUrl(webhookUrl: string) {
    return SLACK_WEBHOOK_REGEX.test(webhookUrl);
  }

  validateWebhookUrl(webhookUrl: string) {
    if (!this.testWebhookUrl(webhookUrl)) {
      throw new Error('slack webhookUrlの形式が不正です');
    }
  }

  handleResponse(res: Response) {
    if (!res.ok || res.status !== 200) {
      throw new Error('slackへの送信に失敗しました。');
    }
  }

  async sendMessage(webhookUrl: string, payload: any) {
    this.validateWebhookUrl(webhookUrl);

    const res = await fetch(webhookUrl, {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    this.handleResponse(res);
  }
}
