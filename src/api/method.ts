import apiClient from "./axios";

export function getUser(params: object) {
  return apiClient({
    url: `/api/users`,
    method: "get",
    params,
  });
}
