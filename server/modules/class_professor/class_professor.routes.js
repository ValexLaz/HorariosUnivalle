
import BaseRouter from "../../common/BaseRouter";
import ClassProfessorController from "./ClassProfessorController";
import ClassProfessorRecord from "./ClassProfessorRecord";

const ctrlProfessorClass = new ClassProfessorController(new ClassProfessorRecord());
const baseRouter = new BaseRouter(ctrlProfessorClass);
baseRouter.initializeRoutesCRUD();
export default baseRouter.routers()