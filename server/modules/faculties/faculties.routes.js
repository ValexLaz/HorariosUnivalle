import {Router} from "express";
import FacultiesController from "./faculties.controller";
import FacultiesRecord from "./FacultiesRecord";
import Faculty from "./faculties.model.js";

const facultyRecord = new FacultiesRecord(Faculty);
const CtrlFaculty = new FacultiesController(facultyRecord);
const router = Router();

router.post('/create',CtrlFaculty.add_record)
router.get('/:id',CtrlFaculty.getRecordById);
router.put('/:id',CtrlFaculty.update_record);
router.delete('/id',CtrlFaculty.delete_record);
export default  router;