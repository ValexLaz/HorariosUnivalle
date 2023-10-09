import  {Router} from "express";
import SemestersController from "./semesters.controller";
import SemesterRecord from "./SemesterRecord";
const CtrlSemester = new SemestersController(SemesterRecord);

const router = Router();

router.post('/create',CtrlSemester.add_record);
router.delete("/:id",CtrlSemester.delete_record);
router.put("/:id",CtrlSemester.update_record);
router.get('/program/:id',CtrlSemester.getAllSemesterByProgram);
export default router;