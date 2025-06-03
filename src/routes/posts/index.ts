import express from 'express';
import {
    createpost,
    getposts,
    getpostbyid,
    deletepost,
    updatetitleandcontent,
} from '../../controllers/posts';

const router = express.Router();

router.get('/', getposts);
router.get('/:id', getpostbyid);
router.post('/', createpost);
router.patch('/:id', updatetitleandcontent);
router.delete('/:id', deletepost);

export default router;