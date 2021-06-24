import { atom } from 'recoil';

export const settingModalStateAtom = atom({
  key: 'global/setting/atom/settingModalState',
  default: false,
});

export const slackWebhookUrlAtom = atom({
  key: 'global/setting/atom/slackWebhookUrlAtom',
  default: '',
});
