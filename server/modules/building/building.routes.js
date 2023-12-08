import BaseRouter from "../../common/BaseRouter";
import BuildingController from "./BuildingController.mjs";
import BuildingRecord from "./BuildingRecord.mjs";
const buildingRecord = new BuildingRecord()
const ctrlBuilding = new BuildingController(buildingRecord);
const baseRouter = new BaseRouter(ctrlBuilding);

baseRouter.initializeRoutesCRUD();
export default baseRouter.routers();