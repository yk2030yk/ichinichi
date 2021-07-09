import React from 'react';
import { useRecoilValue } from 'recoil';

import { SlackIcon } from '@/presenter/core/atoms/icons';
import { slackWebhookUrlAtom } from '@/presenter/global/state/setting';
import { useOpenSnackbar } from '@/presenter/global/hooks/snackbar';
import { useSlackUseCase } from '@/presenter/global/hooks/dependency/slack';
import { diaryEntrySelector } from '@/presenter/diary/state/diary';
import { TimelineMenuItem } from '../../../atoms/timeline/TimelineMenuItem';

type Props = {
  date: string;
  onClickMenu: (e: React.MouseEvent) => void;
};

const useSendSlack = (date: string) => {
  const diaryEntry = useRecoilValue(diaryEntrySelector(date));
  const url = useRecoilValue(slackWebhookUrlAtom);
  const slackUseCase = useSlackUseCase();
  const openSnackbar = useOpenSnackbar('ERROR');

  return async () => {
    try {
      if (!url) return;
      await slackUseCase.sendDiaryTimeLine(url, diaryEntry);
    } catch (e) {
      openSnackbar('Slack通知に失敗しました');
    }
  };
};

export const TimelineMenuItem_Slack: React.FC<Props> = ({
  date,
  onClickMenu,
}) => {
  const sendSlack = useSendSlack(date);

  return (
    <TimelineMenuItem
      onClick={(e: React.MouseEvent) => {
        sendSlack();
        onClickMenu(e);
      }}
      icon={<SlackIcon size={20} />}
    >
      <p>Send Slack Channel</p>
    </TimelineMenuItem>
  );
};
