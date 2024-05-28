import { persisted } from "svelte-local-storage-store";

export type UserTokens = {
  refreshToken: string;
  accessToken: string;
};
export const userTokens = persisted<UserTokens | null>("userToken", null);
