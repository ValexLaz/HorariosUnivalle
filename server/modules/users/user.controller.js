
import ParentController from "../../common/ParentController.js"
import * as tokenJWT from "../../config/auth";

class UserController extends ParentController{
    constructor(recordService) {
        super(recordService);
        this.signing = this.signing.bind(this);
        this.create_record = this.create_record.bind(this);
    }
    async signing(req,res){
        const {email,password} = req.body;
        try {
            const user =  await  this.recordService.findOne({ email })
            console.log(user)
            const isPasswordValid = await this.recordService.compare_password(password, user.password);
            if (!isPasswordValid) {
                return this.responseError(res,{message:'password incorrect'});
            }
            const token = tokenJWT.generateToken({
                userId: user._id,
                university_program_id:user.university_program_id
            },2000);

            res.cookie('auth_token', token, {
                httpOnly: true,
                secure: true,
                sameSite: 'Strict',
            });
            this.responseSuccess(res,{data:{token}})
        }catch (e) {
            console.log(e)
            this.responseError(res,{message:e.message});
        }
    }
    async create_record(req,res){
        try {
            const user = await this.recordService.addUser(req.body);
            this.responseSuccess(res,{data:user});
        }catch (e) {
            this.responseError(res,{message:e.message});
        }
    }
    getAllRecords  = async(req,res)=>{
        try {
            const records = await this.recordService.find({},{password:0,__v:0,});
            this.responseSuccess(res,{data:records});
        }catch (e) {
            this.responseError(res,{message:e.message})
        }
    }

}
export default UserController;