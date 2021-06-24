import { useRecoilValue, useSetRecoilState } from 'recoil';
import { diaryTagSettingModalAtom } from '../../state/diaryTag';

export const useDiaryTagSettingModal = () =>
  useRecoilValue(diaryTagSettingModalAtom);

export const useOpenDiaryTagSettingModal = () => {
  const setState = useSetRecoilState(diaryTagSettingModalAtom);
  return () => setState(true);
};

export const useCloseDiaryTagSettingModal = () => {
  const setState = useSetRecoilState(diaryTagSettingModalAtom);

  const close = (e: React.MouseEvent) => {
    e.preventDefault();
    setState(false);
  };

  return close;
};
