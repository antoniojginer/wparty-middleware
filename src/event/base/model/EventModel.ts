export interface BaseEvent {
    id: number;
    name: string;
    description: string;
    maxTickets?: number;
    ticketPrice?: number;
    capacity?: number;
    initDate: string;
    endDate?: string;
    isPublic: boolean;
    isMooneyPoolShown: boolean;
    eventType: number;
    organizerType: number;
    organizer: Organizer;
    location: Location;
    assistance?: number;
}

export interface Organizer {
    id: number;
    email: string;
    location: Location;
}

export interface Location {
    id: number;
    latitude?: string;
    longitude?: string;
    streetName?: string;
    streetType?: string;
    number?: number;
    level?: number;
    door?: number;
    postalCode?: number;
    localityId: number;
    localityName: string;
    countryId: number;
    countryName: string;
}
