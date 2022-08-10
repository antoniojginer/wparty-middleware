import express from 'express';
import { EventService } from '../service/event.service';

export const eventRouter = express.Router();
const eventService = new EventService();

eventRouter.get('/:id', (req, res) => {
    const { id } = req.params;
    eventService.findById(Number(id));
    res.json(eventService.findById(Number(id)));
});