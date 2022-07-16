const express = require('express');
const router = express.Router()

const PostController = require('../controllers/post')

router.post('/',
    PostController.createPost
)

router.put('/:id',
    PostController.updatePost
)

router.delete('/:id',
    PostController.deletePost
)


router.put('/:id/like',
    PostController.likesAndDislikePost
)

router.get('/:id',
    PostController.getPost
)


router.get('/timeline/all',
    PostController.timelinePosts
)

module.exports = router;