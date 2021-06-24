import React, { useState } from 'react';
import { AiOutlineMore, AiOutlineCopy } from 'react-icons/ai';

import { useLockScroll } from '@/presenter/global/hooks/window';
import { diaryEntrySelector } from '@/presenter/diary/state/diary';
import { useRecoilValue } from 'recoil';
import { useOpenSnackbar } from '@/presenter/global/hooks/snackbar';
import { TimelineCurrentInfo } from '../TimelineCurrentInfo';
import { TimelineEditor } from '../TimelineEditor';
import { TimelineMenu } from '../TimelineMenu';
import * as S from './styled';

type Props = {
  date: string;
  title: string;
};

const useTimelineMenu = () => {
  const { lockScroll, clearLockScroll } = useLockScroll();
  const [isOpenTimelineMenu, setIsOpenTimelineMenu] = useState(false);

  const openTimelineMenu = () => {
    lockScroll();
    setIsOpenTimelineMenu(true);
  };

  const closeTimelineMenu = () => {
    clearLockScroll();
    setIsOpenTimelineMenu(false);
  };

  return {
    isOpenTimelineMenu,
    openTimelineMenu,
    closeTimelineMenu,
  };
};

const useEdit = () => {
  const [isEdit, setIsEdit] = useState(false);

  const openEdit = () => setIsEdit(true);
  const closeEdit = () => setIsEdit(false);

  return {
    isEdit,
    openEdit,
    closeEdit,
  };
};

export const TimelineCard: React.FC<Props> = ({ date, title }) => {
  const {
    isOpenTimelineMenu,
    openTimelineMenu,
    closeTimelineMenu,
  } = useTimelineMenu();

  const { isEdit, openEdit, closeEdit } = useEdit();

  const diaryEntry = useRecoilValue(diaryEntrySelector(date));
  const openSnackbar = useOpenSnackbar('SUCCESS', true);
  const onClickCopy = async () => {
    await navigator.clipboard.writeText(diaryEntry.content);
    openSnackbar('copied!');
  };

  return (
    <>
      <S.CardWrapper>
        <S.Card>
          <S.CardHeader>
            <S.CardDate>{title}</S.CardDate>
            <S.CardTopIconArea>
              <S.CardTopIconWrapper onClick={onClickCopy}>
                <AiOutlineCopy size={15} />
              </S.CardTopIconWrapper>
              <S.CardTopIconWrapper onClick={openTimelineMenu}>
                <AiOutlineMore size={15} />
              </S.CardTopIconWrapper>
            </S.CardTopIconArea>
            <TimelineMenu
              date={date}
              close={closeTimelineMenu}
              isOpen={isOpenTimelineMenu}
            />
          </S.CardHeader>
          <S.CardContent>
            {isEdit ? (
              <TimelineEditor date={date} closeEdit={closeEdit} />
            ) : (
              <TimelineCurrentInfo date={date} openEdit={openEdit} />
            )}
          </S.CardContent>
        </S.Card>
      </S.CardWrapper>
    </>
  );
};
