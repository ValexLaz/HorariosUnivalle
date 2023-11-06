import BaseRouter from "../../common/BaseRouter";
import ProfessorsController from "./ProfessorsController";
import ProfessorRecord from "./ProfessorRecord";

const ctrlProfessor = new ProfessorsController(new ProfessorRecord());
const baseRoute = new BaseRouter(ctrlProfessor);
baseRoute.initializeRoutesCRUD()
export default baseRoute.routers();