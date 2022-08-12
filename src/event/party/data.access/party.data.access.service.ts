import axios from "axios";
import { getBackendBaseUrl } from "../../../helpers/http.helper.service"
import { AssistantEvent } from "../../base/model/EventModel";
import { PartyEvent } from "../model/PartyEventModel";


const baseUrl = getBackendBaseUrl('event/party');

export const getPartyEventById = (id: number) => {
    return axios.get<PartyEvent>(`${baseUrl}/${id}`);
}

export const getPartyEventAssistance = (eventId: number) => {
    return axios.get<number>(`${baseUrl}/assistance/${eventId}`);
}

export const savePartyEvent = (request: PartyEvent) => {
    return axios.put<PartyEvent>(`${baseUrl}`, { ...request });
}

export const addAssistantToPartyEvent = (request: AssistantEvent) => {
    return axios.put<AssistantEvent>(`${baseUrl}/assistant`, request);
}

export const deleteAssistantToPartyEvent = (request: AssistantEvent) => {
    return axios.delete(`${baseUrl}/assistant`, {
        data: request
    });
}