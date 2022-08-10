import { eventRouter } from './event/base/router/event.router';
import { conventionEventRouter } from './event/convention/router/convention.router';
import { partyEventRouter } from './event/party/router/party.router'

export function routerApi(app) {
    app.use('/event', eventRouter);
    app.use('/event/convention', conventionEventRouter);
    app.use('/event/party', partyEventRouter)
}