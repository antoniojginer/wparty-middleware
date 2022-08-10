import { getPartyEventAssistance, getPartyEventById } from "../data.access/party.data.access.service";

export class PartyEventService {

    constructor() {
        // TODO
    }

    findById = async (id: number) => {
        let { data: partyEventDetail } = await this.performGetPartyEvent(id);
        let { data: assistance } = await this.perfomrmGetAssistance(id);
        partyEventDetail.assistance = assistance;
        return partyEventDetail;
    }

    private performGetPartyEvent = (id) => {
        return getPartyEventById(id);
    }

    private perfomrmGetAssistance = (id) => {
        return getPartyEventAssistance(id);
    }

}