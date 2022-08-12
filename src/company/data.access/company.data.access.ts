
import axios from "axios";
import { getBackendBaseUrl } from "../../helpers/http.helper.service";
import { CompanyUser } from "../model/company.model";

const baseUrl = getBackendBaseUrl('/company')

export const createCompanyUser = (request: CompanyUser) => {
    return axios.put(`${baseUrl}`, request);
}