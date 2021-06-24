import React from 'react';
import { useRecoilValue } from 'recoil';

import { Popup } from '@/presenter/core/ui/Popup';
import { diaryEntrySelector } from '../../../state/diary';
import { TimelineMenuItem_Slack } from '../TimelineMenuItem_Slack';
import { TimelineMenuItem_Twitter } from '../TimelineMenuItem_Twitter';

type Props = {
  date: string;
  isOpen: boolean;
  close: () => void;
};

export const TimelineMenu: React.FC<Props> = ({ date, isOpen, close }) => {
  const memo = useRecoilValue(diaryEntrySelector(date));

  const onClickMenuItem = (e: any) => {
    e.stopPropagation();
    close();
  };

  return (
    <Popup isOpen={isOpen} close={close} position="right">
      <>
        <TimelineMenuItem_Slack
          onClickMenu={onClickMenuItem}
          content={memo.content}
        />
        <TimelineMenuItem_Twitter onClickMenu={onClickMenuItem} />
      </>
    </Popup>
  );
};
