import { get } from "svelte/store";
import { accessToken } from "$lib/stores/store";
/**
 * get userToken
 *
 * @param void
 * @returns {string | null}
 */
export const getUserTokens = (): string | null => {
  return get(accessToken);
};

/**
 * set userToken
 *
 * @param {string} _accessToken
 * @returns {void}
 */
export const setUserTokens = (_accessToken: string): void => {
  return accessToken.set(_accessToken);
};

/**
 * clear userToken
 *
 * @param void
 * @returns {void}
 */
export const clearUserToken = (): void => {
  return accessToken.set(null);
};
