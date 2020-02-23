import * as express from 'express';
import { Request, Response } from 'express';
import * as path from "path";

const app = express();
const {
  PORT = 3000,
} = process.env;

app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/test', (req: Request, res: Response) => {
  res.status(200).send('what up!!!')
});

export const start = () => {
  app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });
}