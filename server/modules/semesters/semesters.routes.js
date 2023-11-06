import  {Router} from "express";
import SemestersController from "./semesters.controller";
import SemesterRecord from "./SemesterRecord";
import SemestersModel from "./semesters.model";

const semesterRecord = new SemesterRecord(SemestersModel)
const CtrlSemester = new SemestersController(semesterRecord);

const router = Router();

router.post('/create',CtrlSemester.createRecord);
router.delete("/:id",CtrlSemester.deleteRecordById);
router.put("/:id",CtrlSemester.updateRecord);
router.get('/program/:id',CtrlSemester.getAllSemesterByProgram);
export default router;