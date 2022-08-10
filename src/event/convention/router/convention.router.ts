import express from 'express';
import { ConventionEventService } from '../service/convention.service';

export const conventionEventRouter = express.Router();
const conventionEventService = new ConventionEventService();

conventionEventRouter.get('/:id', (req, res) => {
    const { id } = req.params;
    const conventionEvent = conventionEventService.findById(Number(id));
    res.json(conventionEvent);
});