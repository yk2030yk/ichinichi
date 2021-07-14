import { atom } from 'recoil';

export const slackWebhookUrlAtom = atom({
  key: 'global/setting/atom/slackWebhookUrlAtom',
  default: '',
});
