import express from 'express';
import { getRecommendations, postFeedback } from '../controllers/recommendationController';

const router = express.Router();

router.get('/recommendations', getRecommendations);
router.post('/feedback', postFeedback);

export default router;
