import express from 'express';

const PORT = 3000;
const app = express();

app.use(express.json());

app.post('/', (req, res, next) => {
   res.setHeader('Content-Type', 'application/json');
   res.send(req.body);
});


app.listen(PORT, () => console.log(`Application running on port ${PORT}`));
