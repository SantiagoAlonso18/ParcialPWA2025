import express from "express"
import {
    createuser, getuser, getuserbyid, updateuser, deactivateuser
} from "../../controllers/users/index"

const router = express.Router ();

router.get ("/",getuser)

router.get ("/:id",getuserbyid)

router.post ("/",createuser)

router.patch ("/:id",updateuser)

router.patch ("/deactivate/:id",deactivateuser)

export default router

