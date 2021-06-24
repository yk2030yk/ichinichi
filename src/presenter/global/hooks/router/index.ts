import { useLocation } from 'react-router-dom';

export const useIsCurrentPath = (path: string) => {
  const location = useLocation();
  return location.pathname === path;
};
