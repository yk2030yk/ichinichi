import React, { useState, ChangeEvent, useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { slackWebhookUrlAtom } from '@/presenter/global/state/setting';
import { useSettingUseCase } from '@/presenter/global/hooks/dependency';
import { ModalItem } from '../../../atoms/modal/ModalItem';
import * as S from './styled';

export const ModalItem_Slack: React.FC = () => {
  const [url, setUrl] = useState('');
  const [slackWebhookUrl, setSlackWebhookUrl] = useRecoilState(
    slackWebhookUrlAtom
  );

  const settingUseCase = useSettingUseCase();

  const setDefaultValue = async () => {
    const defaultValue = await settingUseCase.findSetting();
    setUrl(defaultValue.slackWebhookUrl || '');
    setSlackWebhookUrl(defaultValue.slackWebhookUrl || '');
  };

  const update = () => {
    setSlackWebhookUrl(url);
    settingUseCase.updateSetting({ slackWebhookUrl: url });
  };

  useEffect(() => {
    setDefaultValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const disabledSaveButton = url === slackWebhookUrl;

  return (
    <ModalItem title="Slack設定">
      <S.Input
        type="text"
        value={url}
        placeholder="webhookを設定する"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)}
      />
      <S.SaveButton
        type="button"
        onClick={update}
        disabled={disabledSaveButton}
      >
        保存する
      </S.SaveButton>
    </ModalItem>
  );
};
