import BaseRouter from "../../common/BaseRouter";
import ProfessorAvailabilitiesRecord from "./ProfessorAvailabilitiesRecord";
import ProfessorAvailabilitiesCtrl from "./ProfessorAvailabilitiesController";
const ctrlProfessorAvai = new  ProfessorAvailabilitiesCtrl(new ProfessorAvailabilitiesRecord());
const baseRoute = new BaseRouter(ctrlProfessorAvai);
baseRoute.initializeRoutesCRUD()
export default baseRoute.routers()