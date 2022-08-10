import axios from "axios";
import { getBackendBaseUrl, getCacheUrl } from "../../../helpers/http.helper.service";

const cacheBaseUrl = getCacheUrl();


export const getEventById = (id) => {
    axios.get(`${cacheBaseUrl}/${id}`).then(res => {
        // TODO
        return res;
    }).catch(error => {
        // TODO
        return error;
    });
}
