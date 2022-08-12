import { createCompanyUser } from "../data.access/company.data.access";
import { CompanyUser } from "../model/company.model";


export class CompanyService {
    constructor() {}

    createCompanyUser = async (request: CompanyUser) => {
        try {
            // COMPROBACION
            let { data: result } = await this.performCreateCompanyUser(request);
            return result;
        } catch (err) {
            console.log(err);
        }
    }


    private performCreateCompanyUser = (request: CompanyUser) => {
        return createCompanyUser(request);
    }
}