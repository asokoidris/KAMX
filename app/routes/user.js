const express = require ('express');
const  router = express.Router();
const {verifyToken, verifyTokenAndAuthorization,
    
    verifyTokenAndAdmin} = require('../middleware/jwt')
const UserController = require ('../controllers/user')

router.put('/:id', 
verifyTokenAndAuthorization,
UserController.updateUser
)

router.delete('/:id',
verifyTokenAndAuthorization,
UserController.deleteUser
)
router.get('/:id',
verifyTokenAndAdmin,
UserController.getUser
)

router.put('/:id/follow',
verifyTokenAndAuthorization,
UserController.followUser
)

router.put('/:id/unfollow',
verifyTokenAndAuthorization,
UserController.followUser
)


module.exports = router;