import { ParticularUser } from "../model/particular.model";
import axios from "axios";
import { getBackendBaseUrl } from "../../helpers/http.helper.service";

const baseUrl = getBackendBaseUrl('/particular')

export const createParticularUser = (request: ParticularUser) => {
    return axios.put(`${baseUrl}`, request);
}