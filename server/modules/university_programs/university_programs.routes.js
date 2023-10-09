import UniProgramsRecord from "./models/UniProgramsRecord";
import UniProgramsController from "./university_programs.controller";
const CtrUniProgram = new UniProgramsController(UniProgramsRecord);
import  {Router} from "express";
const router = Router();

router.post('/create',CtrUniProgram.create_record);
router.delete("/:id",CtrUniProgram.delete_record);
router.put("/:id",CtrUniProgram.update_record);
router.get('/:id',CtrUniProgram.getRecordById);
export default router;