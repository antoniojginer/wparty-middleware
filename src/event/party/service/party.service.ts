import { BaseEvent } from "../../base/model/EventModel";
import { EventService } from "../../base/service/event.service";
import { getPartyEventAssistance, getPartyEventById, savePartyEvent } from "../data.access/party.data.access.service";
import { PartyEvent } from "../model/PartyEventModel";

const eventService = new EventService();
export class PartyEventService {

    constructor() {
        // TODO
    }

    findById = async (id: number) => {
        let { data: partyEventDetail } = await this.performGetPartyEvent(id);
        let { data: assistance } = await this.performGetAssistance(id);
        partyEventDetail.assistance = assistance;
        return partyEventDetail;
    }

    save = async (request: PartyEvent) => {
        try {
            let { data: res } = await this.performSavePartyEvent(request);
            if (res) {
                await eventService.save({ ...res as BaseEvent }, res.id);
                return res;
            }
        } catch (err) {
            console.log(err);
        }
    }

    private performGetPartyEvent = (id) => {
        return getPartyEventById(id);
    }

    private performGetAssistance = (id) => {
        return getPartyEventAssistance(id);
    }

    private performSavePartyEvent = (request: PartyEvent) => {
        return savePartyEvent(request);
    }

}