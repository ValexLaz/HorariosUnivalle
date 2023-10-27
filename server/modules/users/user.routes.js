import {Router} from "express";
import {authJwt} from "../../middleware";
import * as type_user from "./middleware/verifyTypeUser.js";
import UserRecord from "./UserRecord.js";
import UsersModel from "./users.model";
import UserController from "./user.controller.js";

const router = Router();
const userRecord  = new UserRecord(UsersModel);
const CtrlUser = new UserController(userRecord);

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


