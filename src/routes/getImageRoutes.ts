import { Router } from 'express';
import { getImageById ,getAllImages} from '../controllers/getImageController';

const router = Router();

router.get('/', getAllImages);
router.get('/:id', getImageById);

export default router;
