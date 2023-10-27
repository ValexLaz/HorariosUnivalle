import  {Router} from "express";
import UniProgramsRecord from "./UniProgramsRecord";
import UniProgramsController from "./university_programs.controller";
import University_programsModel from "./university_programs.model";

const uniProgramRecord = new UniProgramsRecord(University_programsModel);
const CtrUniProgram = new UniProgramsController(uniProgramRecord);
const router = Router();

router.post('/create',CtrUniProgram.add_record);
router.delete("/:id",CtrUniProgram.delete_record);
router.put("/:id",CtrUniProgram.update_record);
router.get('/:id',CtrUniProgram.getRecordById);
export default router;