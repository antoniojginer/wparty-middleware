import { findAll, saveEvent } from "../data.access/event.data.access";
import { BaseEvent } from "../model/EventModel"

export class EventService {

    constructor() {
        // TODO
    }

    findById = (id: number) => {
        return {
            id,
            name: 'Hello'
        } as BaseEvent;
    }

    findAll = async () => {
        let { data: allEvents } = await findAll();
        return allEvents;
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

}