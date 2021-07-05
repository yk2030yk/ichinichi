import React from 'react';

import { TwitterIcon } from '@/presenter/core/atoms/icons';
import { TimelineMenuItem } from '../../../atoms/timeline/TimelineMenuItem';

type Props = {
  onClickMenu: (e: React.MouseEvent) => void;
};

export const TimelineMenuItem_Twitter: React.FC<Props> = ({ onClickMenu }) => {
  return (
    <TimelineMenuItem onClick={onClickMenu} icon={<TwitterIcon size={20} />}>
      <p>Tweet</p>
    </TimelineMenuItem>
  );
};
