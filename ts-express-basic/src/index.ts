import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

import './controllers/loginController';
import './controllers/rootController';
import { AppRouter } from './AppRouter';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ['secret']
  })
);
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log('listening on port 3000');
});
