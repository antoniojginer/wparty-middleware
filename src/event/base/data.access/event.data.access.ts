import axios from "axios";
import { getBackendBaseUrl, getCacheUrl } from "../../../helpers/http.helper.service";
import { BaseEvent } from "../model/EventModel";


const cacheBaseUrl = getCacheUrl('event');

export const getEventById = (id) => {
    axios.get(`${cacheBaseUrl}/${id}`).then(res => {
        // TODO
        return res;
    }).catch(error => {
        // TODO
        return error;
    });
}

export const saveEvent = (event: BaseEvent, id: number) => {
    return axios.put(`${cacheBaseUrl}/_doc/${id}`, event);
}

export const findAllEvents = (params) => {
    return axios.get<any>(`${cacheBaseUrl}/_search`, {
        params: params
    });
}
