import { eventRouter } from './event/router/event.router';


export function routerApi(app) {
    app.use('/event', eventRouter);
}