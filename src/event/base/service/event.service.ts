import { findAllEvents, saveEvent } from "../data.access/event.data.access";
import { BaseEvent } from "../model/EventModel"

export class EventService {

    constructor() {
        // TODO
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

    private performSaveEvent = (request: BaseEvent, id: number) => {
        return saveEvent(request, id);
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