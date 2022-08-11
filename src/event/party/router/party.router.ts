import { PartyEventService } from '../service/party.service';
import express from 'express';


export const partyEventRouter = express.Router();
const partyEventService = new PartyEventService();

partyEventRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    let partyEventDetail = await partyEventService.findById(Number(id));
    res.json(partyEventDetail);
});

partyEventRouter.post('/', async (req, res) => {
    let result = await partyEventService.save(req.body);
    res.json(result);
});