import RecordService from "../../common/RecordService";

class UserRecord extends RecordService{
    constructor(model) {
        super(model);
        this.addUser = this.addUser.bind(this);
    }
    async addUser(data){
        try {
            const newUser = {
                name:data.name,
                last_name:data.last_name,
                password: await this.model.encrypt_password(data.password),
                email:data.email,
                users_type_id:data.users_type_id,
                university_program_id:data.university_program_id
            };
            let user = await this.create(newUser);
            return  user
        }catch (e) {
            return new Error(e.message);
        }

    }
}

export  default  UserRecord;