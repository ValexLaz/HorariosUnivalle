import BaseRouter from "../../common/BaseRouter";
import ClassroomTypesCtrl from "./ClassroomTypesCtrl";
import ClassroomTypesRecord from "./ClassroomTypesRecord.mjs";

const ctrlClassroomTypes = new ClassroomTypesCtrl(new ClassroomTypesRecord());
const baseRouter = new BaseRouter(ctrlClassroomTypes);
baseRouter.initializeRoutesCRUD();

export default baseRouter.routers();