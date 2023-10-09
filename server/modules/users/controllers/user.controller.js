import ParentController from "../../../common/ParentController.js"
class UserController extends ParentController{
    constructor(recordService) {
        super(recordService);
    }
    async signing(req,res){
        const {email,password} = req.body;
        const statusSigning = await this.recordService.signin(email,password);
        this.response(res,statusSigning);
    }
    async create_record(req,res){
        const user_record = await this.recordService.addRecord(req.body)
        this.response(res,user_record);
    }

}
export default UserController;