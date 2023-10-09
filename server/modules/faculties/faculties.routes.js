import {Router} from "express";
import FacultiesController from "./faculties.controller";
import FacultiesRecord from "./models/FacultiesRecord";
const CtrlFaculty = new FacultiesController(FacultiesRecord);
const router = Router();

router.post('/create',CtrlFaculty.create_record)
router.get('/:id',CtrlFaculty.getRecordById);
router.put('/:id',CtrlFaculty.update_record);
router.delete('/id',CtrlFaculty.delete_record);
export default  router;