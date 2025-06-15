import apiClient from "./axios";

export function getUser(params: object) {
  return apiClient({
    url: `/api/users`,
    method: "get",
    params,
  });
}



export function getCardList(params: object) {
  return apiClient({
    url: `/api/get/data/economy`,
    method: "get",
    params,
  });
}
