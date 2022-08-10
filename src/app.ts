import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Well done!');
});

app.listen(port, () => {
    console.log(`The app is runnig in port ${port}!`);
});