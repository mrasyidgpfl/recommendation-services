import { Request, Response } from 'express';

export const getRecommendations = (req: Request, res: Response) => {
    const userId = req.query.userId;
    if (!userId) return res.status(400).json({ error: 'Missing userId parameter' });

    const recommendations = [
        { id: 1, item: 'Leather Jacket', price: 120 },
        { id: 2, item: 'Sneakers', price: 80 },
        { id: 3, item: 'Slim Fit Jeans', price: 60 },
    ];

    res.json({ userId, recommendations });
};

export const postFeedback = (req: Request, res: Response) => {
    const { userId, itemId, liked } = req.body;
    if (!userId || !itemId || liked === undefined) {
        return res.status(400).json({ error: 'Missing userId, itemId, or liked parameter' });
    }

    console.log(`Feedback: User ${userId} ${liked ? 'liked' : 'disliked'} item ${itemId}`);
    res.json({ status: 'Feedback received' });
};
