import { getCookie } from "../helpers/cookie";

const API_DOMAIN = "http://localhost:8088/";
const token = getCookie("token")
// console.log(token);


export const get = async (path, options = {}) => {
  const response = await fetch(API_DOMAIN + path, options);
  const result = await response.json();
  return result;
};

export const post = async (path, options = {}) => {
  const { body, useFormData = false, ...fetchOptions } = options;

  const headers = {
    Accept: "application/json",
    "Authorization": `Bearer ${token}`,
  };

  let requestBody;
  if (useFormData) {
    requestBody = body; 
  } else {
    headers["Content-Type"] = "application/json";
    requestBody = JSON.stringify(options);
  }

  const response = await fetch(API_DOMAIN + path, {
    method: "POST",
    headers,
    body: requestBody,
    ...fetchOptions, 
  });

  const result = await response.json();
  return result;
};


export const del = async (path) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${token}`,
    },
  });
  const result = await response.json();
  // console.log(result);
  
  return result;
};

export const put = async (path, options = {}) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(options),
  });
  const result = await response.json();
  return result;
};

export const patch = async (path, options = {}) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(options),
  });
  const result = await response.json();
  return result;
};