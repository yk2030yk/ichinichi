export type DiaryTag = {
  label: string;
  color: string;
};

export type DiaryEntry = {
  userId: string;
  content: string;
  date: string;
  year: number;
  month: number;
  day: number;
  tags: DiaryTag[];
};
