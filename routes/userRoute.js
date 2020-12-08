const express=require('express')
const { registerUser, authUser,
    getUserProfile,updateUserProfile,
    getUsers,deleteUser,
    getUserById,updateUser} = require('../controllers/userController');
const { protect, admin } = require('../middlware/authMiddleware');
const {signupValidation}=require('../validation/validateRegister')

const router=express.Router()

router.route('/').post(signupValidation,registerUser).get(protect,admin, getUsers);

router.post('/login',authUser);

router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

 


module.exports = router