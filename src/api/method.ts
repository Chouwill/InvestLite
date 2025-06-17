import apiClient from "./axios";

export function getUser(params: object) {
  return apiClient({
    url: `/api/users`,
    method: "get",
    params,
  });
}

export function onLogin(data: object) {
  return apiClient({
    url: `/api/login`,
    method: "post",
    data,
  });
}
export function onRegister(data: object) {
  return apiClient({
    url: `/api/register`,
    method: "post",
    data,
  });
}

// 讀取首頁使用者卡片資訊
export function getCardList(params: object) {
  return apiClient({
    url: `/api/get/data/economy`,
    method: "get",
    params,
  });
}
