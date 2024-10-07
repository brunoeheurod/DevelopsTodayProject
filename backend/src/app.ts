import express from 'express';

import * as errorMiddlewares from './middlewares/error.middleware';

import MessageResponse from './types/message.response';
import countryRoutes from './api/routes/countries'
import dotenv from 'dotenv';
dotenv.config()


const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
app.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'Countries API',
  });
});

app.use('/api', countryRoutes);

app.use(errorMiddlewares.notFound);
app.use(errorMiddlewares.errorHandler);

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`Server running on port ${PORT}`);
  /* eslint-enable no-console */
});