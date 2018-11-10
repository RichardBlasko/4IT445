import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

import rootRoutes from './rootRoutes';
import modelIndex from './models/index';


export const app = express();

app.use(bodyParser.json());
app.use(cors());

if (__DEV__) {
  app.use(express.static('public'));
}

app.use(rootRoutes);
app.use(modelIndex);


app.use((req, res, next) => {
  res.status(404);
  res.json({ error: '404: Not found' });
});
