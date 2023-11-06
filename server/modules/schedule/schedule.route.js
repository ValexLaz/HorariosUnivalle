import baseRouter from "../../common/BaseRouter";
import ScheduleRecord from "./ScheduleRecord";
import ScheduleController from "./ScheduleController";

const ctrSchedule = new ScheduleController(new ScheduleRecord());
const baseRoute = new baseRouter(ctrSchedule);
baseRoute.initializeRoutesCRUD();
export  default baseRoute.routers();