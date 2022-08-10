import axios from "axios";
import { getBackendBaseUrl } from "../../../helpers/http.helper.service"
import { PartyEvent } from "../model/PartyEventModel";


const baseUrl = getBackendBaseUrl('event/party');

export const getPartyEventById = (id) => {
    return axios.get<PartyEvent>(`${baseUrl}/${id}`);
}

export const getPartyEventAssistance = (eventId) => {
    return axios.get<number>(`${baseUrl}/assistance/${eventId}`);
}