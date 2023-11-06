import BaseRouter from "../../common/BaseRouter";
import BuildingController from "./BuildingController";
import BuildingRecord from "./BuildingRecord";
const buildingRecord = new BuildingRecord()
const ctrlBuilding = new BuildingController(buildingRecord);
const baseRouter = new BaseRouter(ctrlBuilding);

baseRouter.initializeRoutesCRUD();
export default baseRouter.routers();