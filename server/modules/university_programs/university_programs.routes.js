import  {Router} from "express";
import UniProgramsRecord from "./UniProgramsRecord";
import UniProgramsController from "./university_programs.controller";
import University_programsModel from "./university_programs.model";

const uniProgramRecord = new UniProgramsRecord(University_programsModel);
const CtrUniProgram = new UniProgramsController(uniProgramRecord);
const router = Router();

router.post('/create',CtrUniProgram.createRecord);
router.delete("/:id",CtrUniProgram.deleteRecordById);
router.put("/:id",CtrUniProgram.updateRecord);
router.get('/:id',CtrUniProgram.getRecordById);
export default router;