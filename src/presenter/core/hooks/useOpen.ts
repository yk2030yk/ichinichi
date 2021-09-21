import { useState } from 'react';

type VoidFunc = () => void;
type ReturnValue = [boolean, VoidFunc, VoidFunc, VoidFunc];

export const useOpen = (): ReturnValue => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);

  const close = () => setIsOpen(false);

  const toggle = () => setIsOpen((v) => !v);

  return [isOpen, open, close, toggle];
};
