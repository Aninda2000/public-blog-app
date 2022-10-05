const API_ROOT = "http://localhost:8000/api/";

export const API_URLS = {
  login: () => `${API_ROOT}/users/login`,
  signup: () => `${API_ROOT}/users/register`,
  createArticle: () => `${API_ROOT}/article/create `,
  allArticles: () => `${API_ROOT}/article/all-articles`,
  updateArticle: () => `${API_ROOT}/article/update/:id`,
  deleteArticle: () => `${API_ROOT}/article/destroy/:id`,
};

export const LOCALSTORAGE_TOKEN_KEY = "public__blog__page";
