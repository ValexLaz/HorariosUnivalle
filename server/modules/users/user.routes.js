import {Router} from "express";
import * as CtrlUser from "./user.controller.js";
import {authJwt} from "../../middleware";
import * as type_user from "./middleware/verifyTypeUser.js";
const router = Router();

router.post('/create',authJwt.verify
                            ,type_user.verify_super_admin
                            ,CtrlUser.createUser);
router.delete("/:id",CtrlUser.deleteUser);
router.put("/:id",CtrlUser.updateUser);
router.get('/all',authJwt.verify,CtrlUser.getAllUser);
router.get('/:id',CtrlUser.get_user);
router.post('/signin',CtrlUser.signin);
export default router;


