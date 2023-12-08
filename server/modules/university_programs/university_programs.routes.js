import  {Router} from "express";
import UniProgramsRecord from "./UniProgramsRecord.js";
import UniProgramsController from "./university_programs.controller.js";

const uniProgramRecord = new UniProgramsRecord();
const CtrUniProgram = new UniProgramsController(uniProgramRecord);
const router = Router();

router.post('/create',CtrUniProgram.createRecord);
router.delete("/:id",CtrUniProgram.deleteRecordById);
router.put("/:id",CtrUniProgram.updateRecord);
router.get('/all',CtrUniProgram.getAllRecords);
router.get('/:id',CtrUniProgram.getRecordById);
router.get('/semester/:id',CtrUniProgram.getAllRecordsBySemester)
export default router;