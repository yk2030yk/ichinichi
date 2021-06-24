import { settingUseCaseSelector } from '@/presenter/global/state/dependency';
import { useRecoilValue } from 'recoil';

export const useSettingUseCase = () => useRecoilValue(settingUseCaseSelector);
