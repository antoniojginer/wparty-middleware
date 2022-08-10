import axios from "axios";
import { getCacheUrl } from "../../../helpers/http.helper.service";

const baseUrl = getCacheUrl();

export const getEventById = (id) => {
    axios.get(`${baseUrl}/${id}`).then(res => {
        // TODO
        return res;
    }).catch(error => {
        // TODO
        return error;
    });
}