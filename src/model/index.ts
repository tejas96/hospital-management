export enum UserRoles {
  ADMIN,
  FINANCE,
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
