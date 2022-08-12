import express from 'express';
import { LoginService } from '../service/login.service';

export const loginRouter = express.Router();
const loginService = new LoginService();

loginRouter.post('/', async (req, res) => {
    let result = await loginService.login(req.body);
    res.status(200).json(result);
});
