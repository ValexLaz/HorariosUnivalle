import {Router} from "express";
import {authJwt} from "../../middleware";
import * as type_user from "./middleware/verifyTypeUser.js";
const router = Router();
import UserRecord from "./controllers/UserRecord.js";
import UserController from "./controllers/user.controller.js";

const CtrlUser = new UserController(UserRecord);

// router.post('/create',authJwt.verify
//                             ,type_user.verify_super_admin
//                             ,CtrlUser.create_record);
router.post('/create',CtrlUser.create_record);
router.delete("/:id",CtrlUser.delete_record);
router.put("/:id",CtrlUser.update_record);
router.get('/all',authJwt.verify,CtrlUser.get_all_records);
router.get('/:id',CtrlUser.getRecordById);
router.post('/signing',CtrlUser.signing);
export default router;


