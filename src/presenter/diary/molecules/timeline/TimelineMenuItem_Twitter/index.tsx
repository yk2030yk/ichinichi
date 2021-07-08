import React from 'react';
import { useRecoilValue } from 'recoil';

import { TwitterIcon } from '@/presenter/core/atoms/icons';
import { useOpenSnackbar } from '@/presenter/global/hooks/snackbar';
import { diaryEntrySelector } from '@/presenter/diary/state/diary';
import { TimelineMenuItem } from '../../../atoms/timeline/TimelineMenuItem';

type Props = {
  date: string;
  onClickMenu: (e: React.MouseEvent) => void;
};

const useSendTwitter = (date: string) => {
  const diaryEntry = useRecoilValue(diaryEntrySelector(date));
  const openSnackbar = useOpenSnackbar('WARNING');

  return async () => {
    console.log(`send twitter content: ${diaryEntry.content}`);
    openSnackbar('Twitter送信は実装されていません。');
  };
};

export const TimelineMenuItem_Twitter: React.FC<Props> = ({
  date,
  onClickMenu,
}) => {
  const sendTwitter = useSendTwitter(date);

  return (
    <TimelineMenuItem
      onClick={(e: React.MouseEvent) => {
        sendTwitter();
        onClickMenu(e);
      }}
      icon={<TwitterIcon size={20} />}
    >
      <p>Tweet</p>
    </TimelineMenuItem>
  );
};
