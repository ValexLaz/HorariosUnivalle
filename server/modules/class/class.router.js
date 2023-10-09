import  {Router} from "express";
import ClassController from "./class.controller";
import classRecord from "./ClassRecord.js";
const CtrlClass =  new  ClassController(classRecord)

const router = Router();
router.post('/create',CtrlClass.create_record);
router.delete("/:id",CtrlClass.delete_record);
router.put("/:id",CtrlClass.update_record);
router.get('/:id',CtrlClass.getRecordById)
router.get('/semester/:id',CtrlClass.getAllClassBySemester);
export default router;