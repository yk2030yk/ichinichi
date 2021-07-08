import React from 'react';

import { Popup } from '@/presenter/core/ui/Popup';
import { TimelineMenuItem_Slack } from '../TimelineMenuItem_Slack';
import { TimelineMenuItem_Twitter } from '../TimelineMenuItem_Twitter';

type Props = {
  date: string;
  isOpen: boolean;
  close: () => void;
};

export const TimelineMenu: React.FC<Props> = ({ date, isOpen, close }) => {
  const onClickMenuItem = (e: any) => {
    e.stopPropagation();
    close();
  };

  return (
    <Popup isOpen={isOpen} close={close} position="right">
      <>
        <TimelineMenuItem_Slack date={date} onClickMenu={onClickMenuItem} />
        <TimelineMenuItem_Twitter date={date} onClickMenu={onClickMenuItem} />
      </>
    </Popup>
  );
};
