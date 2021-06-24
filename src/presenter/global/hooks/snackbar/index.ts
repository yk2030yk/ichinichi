import { useSetRecoilState } from 'recoil';
import {
  snackbarContentAtom,
  snackbarStateAtom,
  SnackbarType,
} from '../../state/snackbar';

export const useOpenSnackbar = (
  snackbarType: SnackbarType,
  autoClose = false
) => {
  const setSnackbarContent = useSetRecoilState(
    snackbarContentAtom(snackbarType)
  );
  const setSnackbarState = useSetRecoilState(snackbarStateAtom(snackbarType));

  const startAutoClose = () => {
    setTimeout(() => {
      setSnackbarState(false);
      setSnackbarContent({ message: '' });
    }, 3000);
  };

  return (message: string) => {
    setSnackbarState(true);
    setSnackbarContent({ message });

    if (autoClose) startAutoClose();
  };
};

export const useCloseSnackbar = (snackbarType: SnackbarType) => {
  const setSnackbarContent = useSetRecoilState(
    snackbarContentAtom(snackbarType)
  );
  const setSnackbarState = useSetRecoilState(snackbarStateAtom(snackbarType));

  return () => {
    setSnackbarState(false);
    setSnackbarContent({ message: '' });
  };
};
