import { ParticularUser } from "../../particular/model/particular.model";
import { createParticularUser } from "../data.access/particular.data.access";


export class ParticularService {
    constructor() {}

    createParticularUser = async (request: ParticularUser) => {
        try {
            // COMPROBACION
            let { data: result } = await this.performCreateParticularUser(request);
            return result;
        } catch (err) {
            console.log(err);
        }
    }


    private performCreateParticularUser = (request: ParticularUser) => {
        return createParticularUser(request);
    }
}