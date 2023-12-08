import BaseRouter from "../../common/BaseRouter.js";
import TimeAvailsController from "./TimeAvailsController.js";
import TimeAvailsRecord from "./TimeAvailsRecord.mjs";

const ctrlTimeAvail = new TimeAvailsController(new TimeAvailsRecord());
const baseRoute = new BaseRouter(ctrlTimeAvail);

baseRoute.initializeRoutesCRUD();
export default baseRoute.routers();