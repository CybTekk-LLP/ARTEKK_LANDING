import axios from "axios";
import { userTokens } from "$lib/stores/store";
import { goto } from "$app/navigation";
import * as storeService from "$lib/services/store.service";
import { get } from "svelte/store";
import { PUBLIC_BASE_URI } from "$env/static/public";
import type {
  ICreateProject,
  ICreateUser,
  ISingleDetailedUser,
  ISingleProject,
  ISingleUser,
  IUpdateUser,
} from "$lib/types/ApiService.types";
export const api = axios.create({
  baseURL: PUBLIC_BASE_URI,
  timeout: 5000,
  withCredentials: true,
});

// ERROR FUNCTION
const catchError = (error: {
  response: { status: string };
  message: string;
}) => {
  throw {
    status: error.response.status,
    title: "Error",
    message: error.message,
  };
};

let tries = 0;
const MAX_RETRIES = 3;
// Request interceptor for API calls
api.interceptors.request.use(
  async (config) => {
    const accessToken = storeService.getUserTokens();
    if (!accessToken) return config;
    config.headers.Authorization = "Bearer " + accessToken;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
// Response interceptor for API calls
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (!error.response) return;
    if (error.response.status === 401 && !originalRequest._retry) {
      tries++;
      if (tries > MAX_RETRIES) {
        goto("/login");
        userTokens.set(null);
        return;
      }
      originalRequest._retry = true;
      const response = await api.post("/users/refresh", {
        refreshToken: get(userTokens)?.refreshToken,
      });
      tries = 0;
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + response.data.refreshToken;
      userTokens.set({
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
      });
      return api(originalRequest);
    }
    return Promise.reject(error);
  }
);
// USER
/**
 * Create a user
 *
 * @param {ICreateUser} userInfo
 * @returns {ISingleUser}
 */
export const createNewUser = async (
  userInfo: ICreateUser
): Promise<ISingleUser> => {
  const createUserData = await api.post("/users", userInfo).catch((error) => {
    catchError(error);
  });
  return createUserData?.data;
};
/**
 * Login a user
 *
 * @param {ICreateUser} userInfo
 * @returns {ISingleUser}
 */
export const userLogin = async (
  userInfo: ICreateUser
): Promise<ISingleUser> => {
  const loginUserData = await api
    .post("/users/login", userInfo)
    .catch((error) => {
      catchError(error);
    });

  return loginUserData?.data;
};
/**
 * Get User Detail
 * @param  {number}userId
 * @returns {ISingleDetailedUser}
 */
export const getCurrentUser = async (
  userId: number
): Promise<ISingleDetailedUser> => {
  const userData = await api.get(`/users/${userId}`).catch((error) => {
    catchError(error);
  });
  return userData?.data;
};
/**
 * Update the  user
 * @param {number} userId
 * @param {IUpdateUser} userData
 * @returns {ISingleDetailedUser}
 */
export const updateCurrentUser = async (
  userId: number,
  userData: IUpdateUser
): Promise<ISingleUser> => {
  const updateUserData = await api
    .patch(`/users/${userId}`, userData)
    .catch((error) => {
      catchError(error);
    });
  return updateUserData?.data;
};
/**
 * Delete  User by userId
 * @param  {number} userId
 * @returns {void}
 */
export const deleteUserById = async (
  userId: number
): Promise<ISingleDetailedUser> => {
  const userData = await api.delete(`/users/${userId}`).catch((error) => {
    catchError(error);
  });
  return userData?.data;
};
//PROJECT

/**
 * Create a new Project
 *
 * @param {ICreateProject} projectData
 * @returns {ISingleProject}
 */
export const createNewProject = async (
  projectData: ICreateProject
): Promise<ISingleProject> => {
  const createProjectData = await api
    .post("/projects", projectData)
    .catch((error) => {
      catchError(error);
    });
  return createProjectData?.data;
};
