import React from 'react';
import { useRecoilValue } from 'recoil';

import { SlackIcon } from '@/presenter/core/atoms/icons';
import { slackWebhookUrlAtom } from '@/presenter/global/state/setting';
import { useOpenSnackbar } from '@/presenter/global/hooks/snackbar';
import { useSlackUseCase } from '@/presenter/global/hooks/dependency/slack';
import { TimelineMenuItem } from '../../../atoms/timeline/TimelineMenuItem';

type Props = {
  content: string;
  onClickMenu: (e: React.MouseEvent) => void;
};

const useSendSlack = () => {
  const url = useRecoilValue(slackWebhookUrlAtom);
  const slackUseCase = useSlackUseCase();
  const openSnackbar = useOpenSnackbar('ERROR');

  return async (message: string) => {
    try {
      if (!url) return;
      await slackUseCase.sendDiaryTimeLine(url, message);
    } catch (e) {
      openSnackbar('Slack通知に失敗しました');
    }
  };
};

export const TimelineMenuItem_Slack: React.FC<Props> = ({
  content,
  onClickMenu,
}) => {
  const sendSlack = useSendSlack();

  return (
    <TimelineMenuItem
      onClick={(e: React.MouseEvent) => {
        sendSlack(content);
        onClickMenu(e);
      }}
      icon={<SlackIcon size={20} />}
    >
      <p>Send Slack Channel</p>
    </TimelineMenuItem>
  );
};
