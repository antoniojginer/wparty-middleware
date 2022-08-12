import axios from "axios";
import { CompanyUser } from "../../company/model/company.model";
import { getBackendBaseUrl } from "../../helpers/http.helper.service";
import { LoginRequest } from "../model/login.model";

const baseUrl = getBackendBaseUrl('login');

export const login = (request: LoginRequest) => {
    console.log(baseUrl);
    return axios.post(`${baseUrl}`, request);
}

export const createCompanyUser = (request: CompanyUser) => {
    return axios.put(`${baseUrl}/company`, request);
}
