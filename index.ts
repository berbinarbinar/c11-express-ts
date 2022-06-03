import { config } from 'dotenv';
import express, { Request, Response } from 'express';
const PORT = process.env.PORT || 4000;
config();

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world' });
});

app.get('/foods', (req: Request, res: Response) => {
  res.json([
    {
      name: 'Bakso',
    },
    {
      name: 'Somay',
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
