import Class from "./class.model";
import * as response from "../../common/response";

class ClassController extends ParentController{
    constructor() {
        super();
    }
    async getAllClassBySemester(req,res){
        const {id} = req.params;
        const classes = await this.recordService.get_all_records_by_param({id_semester:id});
        this.response(res,classes)
    }
}
export  default ClassController;
