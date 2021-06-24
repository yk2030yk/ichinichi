import React from 'react';
import { useRecoilValue } from 'recoil';
import { IncomingWebhook } from '@slack/webhook';

import { SlackIcon } from '@/presenter/core/atoms/icons';
import { slackWebhookUrlAtom } from '@/presenter/global/state/setting';
import { useOpenSnackbar } from '@/presenter/global/hooks/snackbar';
import { TimelineMenuItem } from '../../../atoms/timeline/TimelineMenuItem';

type Props = {
  content: string;
  onClickMenu: (e: React.MouseEvent) => void;
};

const useSendSlack = () => {
  const url = useRecoilValue(slackWebhookUrlAtom);
  const openSnackbar = useOpenSnackbar('ERROR');
  const webhook = new IncomingWebhook(url);

  return async (text: string) => {
    try {
      await webhook.send({
        text,
      });
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
    >
      <SlackIcon size={20} />
      <p>Send Slack Channel</p>
    </TimelineMenuItem>
  );
};
