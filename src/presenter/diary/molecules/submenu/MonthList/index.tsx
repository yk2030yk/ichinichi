import React, { ChangeEvent } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { useDateUseCase } from '@/presenter/global/hooks/dependency';
import { selectedYearAtom, selectedMonthAtom } from '../../../state/diary';
import { monthListSelector } from '../../../state/timeline';
import * as S from './styled';

export const MonthList: React.FC = () => {
  const monthList = useRecoilValue(monthListSelector);
  const [year, setYear] = useRecoilState(selectedYearAtom);
  const setMonth = useSetRecoilState(selectedMonthAtom);
  const dateUseCase = useDateUseCase();
  const availableYears = dateUseCase.getAvailableYears();

  const onClickMonth = (month: number) => setMonth(month);

  return (
    <S.Wrapper>
      <S.YearSelect
        value={year}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setYear(Number(e.target.value))
        }
      >
        {availableYears.map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </S.YearSelect>
      <S.MonthList>
        {monthList.map((v) => (
          <S.MonthListItem
            key={v.monthText}
            selected={v.selected}
            onClick={() => onClickMonth(v.month)}
          >
            <p>{v.monthText}</p>
          </S.MonthListItem>
        ))}
      </S.MonthList>
    </S.Wrapper>
  );
};
