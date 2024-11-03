/* model list */
type ListLicensesProps = {
  pkLic: string;
  university: string;
  nrle: string;
  nisr: string;
  initDate: string;
  finDate: string;
  status: string;
  fkPer: string;
};

export interface ListLicensesModel {
  listLicenses?: ListLicensesProps[];
}

