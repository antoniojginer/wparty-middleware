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
}