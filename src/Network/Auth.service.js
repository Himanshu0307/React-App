import { makeGetRequest, makePostRequest } from "./Request";
import { mainURL } from "../Constant/constant";

const urls = {
  login: mainURL + "Employee/EmployeeLogin",
};

export function Authenticate(userData) {
  return makePostRequest(urls.login, userData);
}
