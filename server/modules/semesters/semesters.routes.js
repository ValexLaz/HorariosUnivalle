import  {Router} from "express";
import SemestersController from "./semesters.controller";
import SemesterRecord from "./SemesterRecord";
import SemestersModel from "./semesters.model";

const semesterRecord = new SemesterRecord(SemestersModel)
const CtrlSemester = new SemestersController(semesterRecord);

const router = Router();

router.post('/create',CtrlSemester.add_record);
router.delete("/:id",CtrlSemester.delete_record);
router.put("/:id",CtrlSemester.update_record);
router.get('/program/:id',CtrlSemester.getAllSemesterByProgram);
export default router;