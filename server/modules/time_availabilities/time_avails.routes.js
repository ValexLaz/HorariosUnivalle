import BaseRouter from "../../common/BaseRouter";
import TimeAvailsController from "./TimeAvailsController";
import TimeAvailsRecord from "./TimeAvailsRecord";

const ctrlTimeAvail = new TimeAvailsController(new TimeAvailsRecord());
const baseRoute = new BaseRouter(ctrlTimeAvail);

baseRoute.initializeRoutesCRUD();
export default baseRoute.routers();