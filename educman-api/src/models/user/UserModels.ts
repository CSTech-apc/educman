/* to check */
export interface UserCheck {
  nri: string;
}

/* to save */
export interface UserCreateReq {
  name: string;
  surname: string;
  nri: string;
  profile: string;
  email: string;
  password: string;
  fkPer: string;
  fkLic: string;
}

/* authenticate */
export interface UserAuthReq {
  email: string;
  password: string;
}

/* list all */

/* filter by name, surname and nri */

/* list all by fkPer */

/* list all by fkPer and fkLic */

/* list all by fkPer, fkLic and profile */

/* to remove by pkUser */

/* to update by pkUser */
