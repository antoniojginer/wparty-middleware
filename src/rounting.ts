import { companyRouter } from './company/router/company.router';
import { eventRouter } from './event/base/router/event.router';
import { conventionEventRouter } from './event/convention/router/convention.router';
import { partyEventRouter } from './event/party/router/party.router'
import { loginRouter } from './login/router/logit.router';
import { particularRouter } from './particular/router/particular.router';

const baseAppPath = '/wparty-middleware';
const apiVersion = '1.0';

export function routerApi(app) {
    app.use(`${baseAppPath}/${apiVersion}/event`, eventRouter);
    app.use(`${baseAppPath}/${apiVersion}/event/convention`, conventionEventRouter);
    app.use(`${baseAppPath}/${apiVersion}/event/party`, partyEventRouter);
    app.use(`${baseAppPath}/${apiVersion}/login`, loginRouter);
    app.use(`${baseAppPath}/${apiVersion}/user/particular`, particularRouter);
    app.use(`${baseAppPath}/${apiVersion}/user/company`, companyRouter);
}