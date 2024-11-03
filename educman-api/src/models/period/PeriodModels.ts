/* to check */
export interface PeriodCheckReq {
  year: string;
}

/* to save */
export interface PeriodCreateReq {
  year: string;
}

/* list all */
export interface PeriodPagination {
  skip: number;
  take: number;
}

/* filter by pk */
export interface PeriodFilterByPkReq {
  pkPer: string;
}

/* filter by year */
export interface PeriodFilterReq {
  year: string;
}

/* to update */
export interface PeriodUpdateReq {
  pkPer: string;
  year: string;
}

/* to remove */
export interface PeriodRemoveReq {
  pkPer: string;
}
