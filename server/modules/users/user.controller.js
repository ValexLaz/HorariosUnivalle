import  User from "./models/users.model.js";
import * as response from "../../common/response.js"
import * as tokenJWT from "../../config/auth.js";

export const createUser = async(req,res)=>{
    const {name,last_name,password,email,user_type_id,university_program_id} = req.body;
    try {
        const newUser = new User({
            name:name,
            last_name:last_name,
            password: await User.encrypt_password(password),
            email:email,
            users_type_id:user_type_id,
            university_program_id:university_program_id
        });
        const user_saved = await newUser.save();
        response.success(res,200,"user created",user_saved);
    }catch (e) {
        console.log(e);
        response.error(res);
    }
};
export const deleteUser = async (req,res) =>{
    const {id} = req.params;
    try {
        const user_deleted = await User.findByIdAndDelete({_id:id},{new:true})
        response.success(res,200,`User delete ${id}`,user_deleted);
    }catch (e) {
        console.log(e);
        response.error(res);
    }
}
export const updateUser = async (req,res)=>{
    const data_user  = req.body;
    const {id} = req.params;
    try {
        const userUpdate = await User.findByIdAndUpdate(id,data_user,{new:true});
        response.success(res,200,`user update ${id}`,userUpdate)
    }catch (e) {
        response.error(res);
    }
}
export const getAllUser = async (req,res)=>{
    try {
        const users = await User.find({});
        response.success(res,200,"users",users);
    }catch (e) {
        console.log(e)
        response.error(res);
    }
}
export const get_user = async (req,res) =>{
    const {id} = req.params;
    try {
        const user = await User.findById(id);
        response.success(res,200,"user",user);
    }catch (e) {
        response.error(res);
    }
};
export const signin = async (req,res)=>{
    const {email,password} = req.body;
    try {
        const user = await User.findOne({ email }).populate('users_type_id').exec();
        if (!user) {
            res.status(401).json({ message: "Usuario no encontrado" });
        }
        console.log(user)
        console.log(user.users_type_id.name)
        const isPasswordValid = await User.compare_password(password, user.password);
        if (!isPasswordValid) {
            res.status(401).json({ message: "Contraseña incorrecta" });
        }
        const token = tokenJWT.generateToken({
            userId: user._id,
            users_type_name:user.users_type_id.name,
            university_program_id:user.university_program_id
        },2000);
        response.success(res,200,"Inicio de sesion exitoso",{token});
    }catch (e) {
        console.log(e)
        response.error(res);
    }
};