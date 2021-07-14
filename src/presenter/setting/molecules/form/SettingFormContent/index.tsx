import React from 'react';

import { ModalItem_Slack } from '../ModalItem_Slack';
import { ModalItem_Theme } from '../ModalItem_Theme';

export const SettingFormContent: React.FC = () => {
  return (
    <div>
      <ModalItem_Theme />
      <ModalItem_Slack />
    </div>
  );
};
