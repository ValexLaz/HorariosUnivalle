import BaseRouter from "../../common/BaseRouter";
import ProfessorsController from "./ProfessorsController";
import ProfessorRecord from "./ProfessorRecord";

const ctrlProfessor = new ProfessorsController(new ProfessorRecord());
class ProfessorRoutes extends BaseRouter{
    constructor(controller) {
        super(controller);
        super.initializeRoutesCRUD();
        this.setAdditionalRoutes();
    }
    setAdditionalRoutes(){
        this.router.post("/findAllByParams",this.ctrl.getRecordsByParams);
    }

}
const routeProfessor = new ProfessorRoutes(ctrlProfessor);
export default routeProfessor.routers();