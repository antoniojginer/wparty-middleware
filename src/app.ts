import express from 'express';
import { routerApi } from './rounting';

const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('Hello world!');
});

routerApi(app);

app.listen(port, () => {
    console.log(`The app is runnig in port ${port}!`);
});