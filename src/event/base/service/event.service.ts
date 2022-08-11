import { findAllEvents, findEventById, saveEvent, updateAssistance } from "../data.access/event.data.access";
import { BaseEvent } from "../model/EventModel"

export class EventService {

    constructor() {
        // TODO
    }

    findById = async (id) => {
        try {
            let { data: response } = await this.performFindById(id);
            if (response) {
                return response;
            }
        } catch(err) {
            console.log(err);
        }
    }

    findAll = async (params) => {
        const searchFilters = this.buildSearchFilters(params);
        let { data: response } = await findAllEvents(searchFilters);
        return this.buildGetAllEventsResponse(response);
    }

    save = async (request: BaseEvent, id: number) => {
        try {
            return await this.performSaveEvent(request, id);
        } catch(err) {
            console.log(err);
        }
    }

    updateAssistance = async (assistance: number, eventId: number) => {
        try {
            this.performUpdateAssistance(assistance, eventId);
        } catch(err) {
            // TODO
        }
    }

    private performFindById = (id: number) => {
        return findEventById(id);
    }

    private performSaveEvent = (request: BaseEvent, id: number) => {
        return saveEvent(request, id);
    }

    private performUpdateAssistance = (assistance: number, eventId: number) => {
        return updateAssistance(assistance, eventId);
    }

    private buildSearchFilters = (params?: any) => {
        if (!params) {
            return {
                'query' : {
                    'match_all' : {}
                }
            }
        }
        // TODO
    }

    private buildGetAllEventsResponse = (res) => {
        let events = [];
        res?.hits?.hits.forEach(event => {
            events.push(event._source);
        });
        return events;
    }

}