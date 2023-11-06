import BaseRouter from "../../common/BaseRouter";
import ClassAvailabilitiesController from "./ClassAvailabilitiesController";
import ClassAvailabilitiesRecord from "./ClassAvailabilitiesRecord";

const ctrlClassAvailabilities  =new ClassAvailabilitiesController(new ClassAvailabilitiesRecord());
const baseRouter = new BaseRouter(ctrlClassAvailabilities);
baseRouter.initializeRoutesCRUD();
export default baseRouter.routers();