import express, { Request, Response } from 'express';

const router = express.Router();

// import { createUserSessionHandler } from '@/controllers/auth.controller';

router.post('/', async (req: Request, res: Response) => {
    console.log('req.body', req.body);
});

export default router;
