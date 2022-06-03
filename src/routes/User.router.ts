import { Request, Response, Router } from 'express';
import { number, object, string } from 'yup';
import { UserController } from '../controllers/user.controller';
import { StatusCodes } from 'http-status-codes';

const userRouter = Router();
const userController = new UserController();

userRouter.get('/', async (req: Request, res: Response) => {
  res.json({ message: 'from user router' });
});

userRouter.post('/', async (req: Request, res: Response) => {
  const bodySchema = object().shape({
    userName: string().required(),
    lastName: string().required(),
    age: number().required(),
  });
  const body = bodySchema.validateSync(req.body);

  const newUser = await userController.createUser(body);
  res.status(StatusCodes.OK).json(newUser);
});

export default userRouter;
