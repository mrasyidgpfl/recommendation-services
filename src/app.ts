import express, { Request, Response } from 'express';
import recommendationRoutes from './routes/recommendationRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req: Request, res: Response) => res.send('OK'));
app.use('/', recommendationRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
