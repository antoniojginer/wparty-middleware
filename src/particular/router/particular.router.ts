import express  from 'express';
import { ParticularService } from '../service/particular.service';


export const particularRouter = express.Router();
const particularService = new ParticularService();

particularRouter.post('', async (req, res) => {
    let result = await particularService.createParticularUser(req.body);
    res.status(201).json(result);
});
