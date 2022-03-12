export enum UserRoles {
  ADMIN = "Admin",
  FINANCE = "Finance",
}

export enum ApiMethods {
  GET,
  POST,
  PUT,
  DELETE,
}

export type Doctor = {
  id: string;
  fullName: string;
  honorific: string;
  expertise: Array<string>;
  profilePic: string;
};

export type Inventory = {
  id: string;
  name: string;
  price: number;
  qty: number;
  description: string;
};

export type LoggedInUser = {
  role: UserRoles;
  orgKey: string;
  approvals?: Array<string>;
};

export interface DropDownOption {
  label: string;
  value: string;
  icon?: any;
}
