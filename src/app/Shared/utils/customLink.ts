import { API_REGEX } from "../constants/app-constants";

export const customLink = (url: string, token: string): string => {
  const regex = new RegExp(API_REGEX.replace("$token", token));
  const parsedUrl = url.match(regex);
  const id = parsedUrl[1] || "";
  return `/${token}/${id}`;
};
