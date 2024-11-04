/* to check - */
export interface LicenseCheckReq {
  fkPer: string;
  nrle: string;
}

/* to save */
export interface LicenseCreateReq {
  university: string;
  nrle: string;
  nisr: string;
  initDate: string;
  finDate: string;
  status: string;
  fkPer: string;
}

/* list all pagination */
export interface LicensePagination {
  skip: number;
  take: number;
}

/* list all by period */
export interface LicenseListAllByFkPerReq {
  skip: number;
  take: number;
  fkPer: string;
}

/* list all pagination by fkper and status */
export interface LicenseListAllByFkPerStatusReq {
  skip: number;
  take: number;
  fkPer: string;
  status: string;
}

/* list all by period and status and university*/
export interface LicenseListAllByFkPerStatusUnivReq {
  skip: number;
  take: number;
  fkPer: string;
  status: string;
  university: string;
}

/* list all by period and university */
export interface LicenseListAllPeriodUnivReq {
  year: string;
  university: string;
}

/* filter by period and nrle OK */
export interface LicenseListAllPeriodNrleReq {
  year: string;
  nrle: string;
}

/* filter by period and nisr OK */
export interface LicenseListAllPeriodNisrReq {
  year: string;
  nisr: string;
}

/* to update by pkLic and fkPer OK */
export interface LicenseToUpdatePkLicReq {
  pkLic: string;
  university: string;
  nrle: string;
  nisr: string;
  initDate: string;
  finDate: string;
  status: string;
  fkPer: string;
}

/* to remove */
export interface LicenseToRemoveReq {
  pkLic: string;
}
