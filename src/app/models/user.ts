// User Interface
export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}

// Address Interface
export interface IAddress {
  street: string;
  suite: number;
  city: string;
  zipcode: string;
  geo: IGeo;
}

// Geo Interface
export interface IGeo {
  lat: string;
  lng: string;
}

// Geo Interface
export interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}
