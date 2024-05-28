export interface ICreateUser {
  email: string;
  password: string;
}
export interface ISingleUser {
  id: number;
  email: string;
  name?: string;
  phoneNumber?: string;
  refreshToken?: string;
  accessToken?: string;
}
export interface ISingleDetailedUser {
  id: string;
  email: string;
  name: string;
  phoneNumber: string;
  projects: ISingleProject;
}
export interface IUpdateUser {
  id: number;
  email: string;
  name?: string;
  phoneNumber?: string;
}
export interface ICreateProject {
  status: "inactive" | "active";
  name: string;
  apiKey: string;
  domains: string;
  platformUrl: string;
  userId: number;
}
export interface ISingleProject {
  id: string;
  status: "inactive" | "active";
  name: string;
  apiKey: string;
  domains: string;
  platformUrl: string;
  userId: number;
}
