import BaseRouter from "../../common/BaseRouter";
import ClassRoomController from "./ClassRoomController";
import ClassRoomRecord from "./ClassRoomRecord.mjs";

const ctrlClassRoom = new ClassRoomController(new ClassRoomRecord());
const baseRouter = new BaseRouter(ctrlClassRoom);
baseRouter.initializeRoutesCRUD();
export default baseRouter.routers()