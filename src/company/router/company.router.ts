import express  from 'express';
import { CompanyService } from '../service/company.service';

export const companyRouter = express.Router();
const companyService = new CompanyService();

companyRouter.post('', async (req, res) => {
    let result = await companyService.createCompanyUser(req.body);
    res.status(201).json(result);
});
