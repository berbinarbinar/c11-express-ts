import * as express from 'express';
import { Request, Response } from 'express';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const apiRouter = express.Router();
const v1 = express.Router();

app.use('/api', apiRouter);
apiRouter.use('/v1', v1);

v1.get('/', (req: Request, res: Response) => {
  res.json({ message: 'ini dari api v1' });
});
