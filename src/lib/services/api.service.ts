import axios from "axios";
import { userTokens } from "$lib/stores/store";
import { goto } from "$app/navigation";
import * as storeService from "$lib/services/store.service";
import { get } from "svelte/store";
import { PUBLIC_BASE_URI } from "$env/static/public";
import type {
  IChatResponse,
  ICreateContact,
  ICreateProject,
  ICreateUser,
  ISingleChat,
  ISingleContact,
  ISingleDetailedUser,
  ISingleProject,
  ISingleUser,
  IUpdateProject,
  IUpdateUser,
} from "$lib/types/ApiService.types";
export const api = axios.create({
  baseURL: PUBLIC_BASE_URI,
  timeout: 5000,
  withCredentials: false,
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
// // Response interceptor for API calls
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
/**
 * Get the project
 *
 * @param {number} projectId
 * @returns {ISingleProject}
 */
export const getProjectById = async (
  projectId: number
): Promise<ISingleProject> => {
  const projectData = await api.get(`/projects/${projectId}`).catch((error) => {
    catchError(error);
  });
  return projectData?.data;
};
/**
 * Delete the project
 *
 * @param {number} projectId
 * @returns {void}
 */
export const deleteProjectById = async (
  projectId: number
): Promise<ISingleProject> => {
  const projectData = await api
    .delete(`/projects${projectId}`)
    .catch((error) => {
      catchError(error);
    });
  return projectData?.data;
};
/**
 * update the project
 *
 * @param {number} projectId
 * @param {IUpdateProject} updateData
 * @returns {ISingleProject}
 */
export const updateProject = async (
  projectId: number,
  updateData: IUpdateProject
): Promise<ISingleProject> => {
  const projectData = await api
    .patch(`/projects/${projectId}`, updateData)
    .catch((error) => {
      catchError(error);
    });
  return projectData?.data;
};

//Contact

/**
 * Create a new Contact
 *
 * @param {ICreateContact} contactData
 * @returns {ISingleContact}
 */
export const createNewContact = async (
  contactData: ICreateContact
): Promise<ISingleContact> => {
  const createContactData = await api
    .post("/contacts", contactData)
    .catch((error) => {
      catchError(error);
    });
  return createContactData?.data;
};

/**
 * Get all contact
 *
 * @param {number}
 * @returns {ISingleContact[]}
 */
export const getAllContacts = async (): Promise<ISingleContact[]> => {
  const contactData = await api.get(`/contacts`).catch((error) => {
    catchError(error);
  });
  return contactData?.data;
};
/**
 * Get all contact by id
 *
 * @param {number} contactId
 * @returns {ISingleContact}
 */
export const getAllContactsById = async (
  contactId: number
): Promise<ISingleContact[]> => {
  const contactData = await api.get(`/contacts/${contactId}`).catch((error) => {
    catchError(error);
  });
  return contactData?.data;
};
//UPLOAD
/**
 * Upload an model file
 *
 * @param {File[]} models
 * @returns { URI: String}
 */
export const uploadGallery = async (models: File[]): Promise<string[]> => {
  const formData = new FormData();
  for (const model of models) {
    formData.append("gallery", model);
  }
  try {
    const { data } = await api.post("/uploads/gallery", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data.uri;
  } catch (error) {
    console.error(error);
  }
  return [];
};
// Chat Message
/**
 * get chat message reply
 * @param {string} message
 * @returns {IChatResponse}
 */

export const chatboxMessage = async (
  message: string
): Promise<IChatResponse> => {
  const chatboxMessageData = await api
    .post("/chats", { message })
    .catch((error) => {
      catchError(error);
    });
  return chatboxMessageData?.data;
};
