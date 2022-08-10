import { BaseEvent } from "../../base/model/EventModel";

export interface ConventionEvent extends BaseEvent {
    diskJockeys?: string[];
    assistants?: string[];
    partyTypeId: number;
    partyTypeName: string;
}