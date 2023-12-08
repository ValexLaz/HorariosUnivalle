
import ScheduleRecord from "./ScheduleRecord.mjs";
import ScheduleController from "./ScheduleController";
import BaseRouter from "../../common/BaseRouter";

const ctrSchedule = new ScheduleController(new ScheduleRecord());
class ProfessorRoutes extends BaseRouter{
    constructor(controller) {
        super(controller);
        super.initializeRoutesCRUD();
        this.setAdditionalRoutes();
    }
    setAdditionalRoutes(){
        this.router.post("/generate",this.ctrl.generate);
        this.router.post("/find",this.ctrl.findSchedule)
    }

}
const routeSchedule = new ProfessorRoutes(ctrSchedule);
export  default routeSchedule.routers();