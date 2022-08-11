import express from 'express';
import { EventService } from '../service/event.service';

export const eventRouter = express.Router();
const eventService = new EventService();

eventRouter.get('', async (req, res) => {
    const { params: params } = req;
    let allEvents = await eventService.findAll(params);
    res.send(allEvents);
});