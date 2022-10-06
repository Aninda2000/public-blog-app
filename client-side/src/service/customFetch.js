import { API_URLS, LOCALSTORAGE_TOKEN_KEY } from "./api";

const customFetch = async (url, { body, ...customConfig }) => {
  const token = window.localStorage.getItem();

  const headers = {
    "content-type": "application/json",
    Accept: "application/json",
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  const config = {
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }
  try {
    const response = await fetch(url, config);
    if (response.success) {
      return {
        data: data.data,
        success: true,
      };
    }
  } catch (err) {
    console.log("error***", err);
    return {
      message: err.msg,
      success: false,
    };
  }
};

export const getArticles = () => {
  return (
    customFetch(API_URLS.allArticles),
    {
      method: "GET",
    }
  );
};
