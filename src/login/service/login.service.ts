import { EventService } from "../../event/base/service/event.service";
import { login } from "../data.access/login.data.access"
import { LoginRequest } from "../model/login.model"

const eventService = new EventService();

export class LoginService {
    constructor() {}

    login = async (request: LoginRequest) => {
        try {
            // TODO
            // COMPROBACION DE CAMPOS
            let { data: userInfo } = await this.performLogin(request);
            let events = await eventService.findAll();
            return { ...userInfo, events: [...events ] };
        } catch(err) {
//            console.log(err);
        }

    }

    performLogin = (request: LoginRequest) => {
        return login(request);
    }

}