import React from 'react';

import { TwitterIcon } from '@/presenter/core/atoms/icons';
import { useOpenSnackbar } from '@/presenter/global/hooks/snackbar';
import { TimelineMenuItem } from '../../../atoms/timeline/TimelineMenuItem';

type Props = {
  content: string;
  onClickMenu: (e: React.MouseEvent) => void;
};

const useSendTwitter = () => {
  const openSnackbar = useOpenSnackbar('WARNING');

  return async (content: string) => {
    console.log(`send twitter content: ${content}`);
    openSnackbar('Twitter送信は実装されていません。');
  };
};

export const TimelineMenuItem_Twitter: React.FC<Props> = ({
  content,
  onClickMenu,
}) => {
  const sendTwitter = useSendTwitter();

  return (
    <TimelineMenuItem
      onClick={(e: React.MouseEvent) => {
        sendTwitter(content);
        onClickMenu(e);
      }}
      icon={<TwitterIcon size={20} />}
    >
      <p>Tweet</p>
    </TimelineMenuItem>
  );
};
