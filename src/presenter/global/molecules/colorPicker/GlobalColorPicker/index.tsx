import React from 'react';

import { ColorPicker } from '@/presenter/core/ui/ColorPicker';
import { useTagColor } from '@/presenter/global/hooks/theme';

type Props = {
  color: string;
  onChange: (color: string) => void;
};

export const GlobalColorPicker: React.FC<Props> = ({ color, onChange }) => {
  const colors = useTagColor();
  return <ColorPicker colors={colors} color={color} onChange={onChange} />;
};
