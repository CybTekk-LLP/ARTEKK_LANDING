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
  id: number;
  email: string;
  name?: string;
  phoneNumber?: string;
  projects?: ISingleProject;
}
export interface IUpdateUser {
  email: string;
  name?: string;
  phoneNumber?: string;
}
export interface ICreateProject {
  status: "inactive" | "active";
  name: string;
  apiKey?: string;
  domains: string[];
  platformUrl?: string;
  user: number;
}
export interface ISingleProject {
  id: number;
  status: "inactive" | "active";
  name: string;
  apiKey?: string;
  domains: string;
  platformUrl?: string;
  user: number;
}
export interface IUpdateProject {
  name?: string;
  apiKey?: string;
  domains?: string[];
  platformUrl?: string;
}
//contact
export interface ICreateContact {
  name: string;
  email: string;
  companyName: string;
  remarks?: string;
  amount: string;
  isNegotiable?: boolean;
  plans?: string;
}
export interface ISingleContact {
  id: number;
  name: string;
  email: string;
  companyName: string;
  remarks?: string;
  amount: string;
  isNegotiable?: boolean;
  plans?: string;
}
