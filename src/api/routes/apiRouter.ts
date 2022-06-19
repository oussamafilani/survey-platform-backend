import { Router, Response, Request } from 'express';
const router = Router();

import Auth from '@/routes/auth.route';

router.get('/', (req: Request, res: Response) => {
    res.json({
        message: 'Hi 👋',
    });
});

router.use('/blog_post_event', Auth);

export default router;
