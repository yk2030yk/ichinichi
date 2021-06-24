export type DiaryTagDomain = {
  label: string;
  color: string;
};

export type DiaryEntryDomain = {
  userId: string;
  content: string;
  date: string;
  year: number;
  month: number;
  day: number;
  tags: DiaryTagDomain[];
};
