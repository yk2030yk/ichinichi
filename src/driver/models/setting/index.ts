import { DataModel } from '@/driver/models/dataModel';

export type SettingDataModel = DataModel<
  'Setting',
  {
    slackWebhookUrl: string;
  }
>;
