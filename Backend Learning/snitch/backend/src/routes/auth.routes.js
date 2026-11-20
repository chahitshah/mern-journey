import {Router} from "express"
import {registerUserRules,loginUserRules} from "../validator/auth.validator.js"
import { registeruser,loginuser } from "../controllers/auth.controller.js"
const router = Router()

router.post("/register",registerUserRules,registeruser)
router.post("/login",loginUserRules,loginuser)

export default router