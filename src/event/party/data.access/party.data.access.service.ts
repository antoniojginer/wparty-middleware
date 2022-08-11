import axios from "axios";
import { getBackendBaseUrl } from "../../../helpers/http.helper.service"
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