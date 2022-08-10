import { ConventionEvent } from "../model/ConventionEventModel";

export class ConventionEventService {

    constructor() {
        // TODO
    }

    findById = (id: number) => {
        return {
            id,
            name: 'Hello Convention Event'
        } as ConventionEvent;
    }
}