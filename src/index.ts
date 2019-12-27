import * as express from 'express';
import { Request, Response } from 'express';
const app = express();
const {
  PORT = 3000,
} = process.env;
app.get('/', (req: Request, res: Response) => {
  res.status(200).send('what up')
});
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});