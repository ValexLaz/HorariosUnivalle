import BaseRouter from "../../common/BaseRouter";
import ClusterRecord from "./ClusterRecord.mjs";
import ClusterController from "./ClusterController";

const ctrlCluster = new ClusterController(new ClusterRecord());
const baseRouter = new BaseRouter(ctrlCluster);
baseRouter.initializeRoutesCRUD();
export default baseRouter.routers()