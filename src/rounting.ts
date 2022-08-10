import { eventRouter } from './event/base/router/event.router';
import { conventionEventRouter } from './event/convention/router/convention.router';

export function routerApi(app) {
    app.use('/event', eventRouter);
    app.use('/event/convention', conventionEventRouter);
}