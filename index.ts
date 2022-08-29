import express, { Express } from 'express';
import dotenv from 'dotenv';
import { errorHandler } from './middleware/errorMiddleware';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use('/api', require('./routes'));
app.use(errorHandler);

app.listen(port, () => {
	console.log(`✔ Running at http://localhost:${port}`);
});
