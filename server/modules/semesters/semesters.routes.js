import  {Router} from "express";
import  * as ctrl_semester from "./semesters.controller.js"
const router = Router();
router.post('/create',ctrl_semester.create_semester);
router.delete("/:id",ctrl_semester.delete_semester_by_id);
router.put("/:id",ctrl_semester.update_semester);
router.get('/program/:id',ctrl_semester.get_all_semester_by_program);
export default router;