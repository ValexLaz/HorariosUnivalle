import {Router} from "express";
import FacultiesController from "./faculties.controller";
import FacultiesRecord from "./FacultiesRecord";
import Faculty from "./faculties.model.js";

const facultyRecord = new FacultiesRecord(Faculty);
const CtrlFaculty = new FacultiesController(facultyRecord);
const router = Router();

router.post('/create',CtrlFaculty.createRecord)
router.get('/all',CtrlFaculty.getAllRecords);
router.get('/:id',CtrlFaculty.getRecordById);
router.put('/:id',CtrlFaculty.updateRecord);
router.delete('/:id',CtrlFaculty.deleteRecordById);

export default  router;