import express from "express"
import { changePassword, forgotPassword, loginUser, logoutUser, registerUser, updateProfile, verification, verifyOTP } from "../controller/user_controller.js"
import { isAuthenticated } from "../middlewires/isAuthenticated.js"
import { userSchema, validateUser } from "../validators/userValidate.js"
import { singleUpload } from "../middlewires/multer.js"

const router = express.Router()


router.post('/register',validateUser(userSchema), registerUser)
router.post('/verify', verification)
router.post('/login', loginUser)
router.post('/logout',isAuthenticated, logoutUser)
router.put('/profile/update',isAuthenticated,singleUpload,updateProfile)
router.post('/forgot-password', forgotPassword)
router.post('/verify-otp/:email', verifyOTP)
router.post('/change-password/:email', changePassword)

export default router


