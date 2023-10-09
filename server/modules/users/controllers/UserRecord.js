import RecordService from "../../../common/recordService";
import User from "../models/users.model";
import * as tokenJWT from "../../../config/auth";

class UserRecord extends RecordService{
    constructor() {
        super(User);

    }
    async signin(email,password){
        try {
            const user = await this.model.findOne({ email }).populate('users_type_id').exec();
            if (!user) {
                return this.buildResponseError("user not found",401);
            }
            const isPasswordValid = await this.model.compare_password(password, user.password);
            if (!isPasswordValid) {
                return this.buildResponseError("password incorrect",401)
            }
            const token = tokenJWT.generateToken({
                userId: user._id,
                users_type_name:user.users_type_id.name,
                university_program_id:user.university_program_id
            },2000);
            return  this.buildResponseSuccess(token)
        }catch (e) {
            return  this.buildResponseError(e.message)
        }
    }
    async addRecord(data){
        try {
            const newUser = {
                name:data.name,
                last_name:data.last_name,
                password: await this.model.encrypt_password(data.password),
                email:data.email,
                users_type_id:data.users_type_id,
                university_program_id:data.university_program_id
            };
            return this.create_record(newUser);
        }catch (e) {
            return this.buildResponseError(e.message);
        }

    }
}

export  default  UserRecord;