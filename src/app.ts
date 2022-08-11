import express from 'express';
import { routerApi } from './rounting';
import bp from 'body-parser';

const app = express();
const port = 3000;

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello world!');
});

routerApi(app);

app.listen(port, () => {
    console.log(`The app is runnig in port ${port}!`);
});