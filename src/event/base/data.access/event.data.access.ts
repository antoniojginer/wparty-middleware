import axios from "axios";
import { buildUpdateRequest } from "../../../helpers/elastic.helper.service";
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

export const findAllEvents = () => {
    return axios.get<any>(`${cacheBaseUrl}/_search`);
}

export const findEventById = (id: number) => {
    return axios.get<BaseEvent>(`${cacheBaseUrl}/_source/${id}`);
}

export const updateAssistance = (assistance: number, eventId: number) => {
    let request = buildUpdateRequest({assistance: assistance });
    return axios.post<any>(`${cacheBaseUrl}/_update/${eventId}`, request);
}
