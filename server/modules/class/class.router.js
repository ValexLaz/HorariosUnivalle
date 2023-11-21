import  {Router} from "express";
import ClassController from "./class.controller";
import ClassRecord from "./ClassRecord.js";
import Class from "./class.model.js";

const router = Router();
const classRecord = new ClassRecord(Class);
const CtrlClass =  new  ClassController(classRecord)

router.post('/create',CtrlClass.createRecord);
router.delete("/:id",CtrlClass.deleteRecordById);
router.put("/:id",CtrlClass.updateRecord);
router.get('/all',CtrlClass.getAllRecords)
router.get('/:id',CtrlClass.getRecordById)
router.get('/semester/:id',CtrlClass.getAllClassBySemester);
export default router;