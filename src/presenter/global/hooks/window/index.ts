import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock';

export const useLockScroll = () => {
  const lockScroll = () => {
    if (document.body) disableBodyScroll(document.body);
  };

  const clearLockScroll = () => {
    if (document.body) enableBodyScroll(document.body);
  };

  return {
    lockScroll,
    clearLockScroll,
  };
};
