import  {Router} from "express";
import ClassController from "./class.controller";
import ClassRecord from "./ClassRecord.js";
import Class from "./class.model.js";

const router = Router();
const classRecord = new ClassRecord(Class);
const CtrlClass =  new  ClassController(classRecord)

router.post('/create',CtrlClass.add_record);
router.delete("/:id",CtrlClass.delete_record);
router.put("/:id",CtrlClass.update_record);
router.get('/:id',CtrlClass.getRecordById)
router.get('/semester/:id',CtrlClass.getAllClassBySemester);
export default router;