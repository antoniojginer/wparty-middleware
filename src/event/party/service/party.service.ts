import { request } from "http";
import { AssistantEvent, BaseEvent } from "../../base/model/EventModel";
import { EventService } from "../../base/service/event.service";
import { addAssistantToPartyEvent, deleteAssistantToPartyEvent, getPartyEventAssistance, getPartyEventById, savePartyEvent } from "../data.access/party.data.access.service";
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

    addAssistantToEvent = async (request: AssistantEvent) => {
        try {
            let { data: response } = await this.performAddAssistantToEvent(request);
            if (response) {
                this.updateAssistanceToEvent(request.eventId);
            }
            return response;
        } catch(err) {
            console.log(err);
        }
    }

    deleteAssistantToEvent = async (request: AssistantEvent) => {
        try {
            await this.performDeleteAssistantToEvent(request);
            this.updateAssistanceToEvent(request.eventId);
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

    private performAddAssistantToEvent = (request: AssistantEvent) => {
        return addAssistantToPartyEvent(request);
    }

    private performDeleteAssistantToEvent = (request: AssistantEvent) => {
        return deleteAssistantToPartyEvent(request);
    }

    private updateAssistanceToEvent = async (eventId: number) => {
        let { data: assistance } = await this.performGetAssistance(eventId);
        eventService.updateAssistance(assistance, eventId);
    }

}