import  {Router} from "express";
import  * as ctrl_class from "./class.controller.js"
const router = Router();
router.post('/create',ctrl_class.create_class);
router.delete("/:id",ctrl_class.delete_class_by_id);
router.put("/:id",ctrl_class.update_class);
router.get('/semester/:id',ctrl_class.get_all_class_by_semester);
export default router;