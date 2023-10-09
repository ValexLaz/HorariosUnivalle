import express from "express";
import config from "./config/config.js";
import userRoutes from "./modules/users/user.routes.js";
import semesterRoutes from "./modules/semesters/semesters.routes.js";
import classRouter from "./modules/class/class.router";
import facultyRoutes from "./modules/faculties/faculties.routes";
import UniProgramsRoutes from "./modules/university_programs/university_programs.routes";

import morgan from "morgan";

class App{
    #app
    #PORT
    constructor() {
        this.#app = express();
        this.#PORT = config.PORT;
        this.#configure();
        this.#setRoutes();
    }
    #setRoutes(){
        this.#app.use('/api/user',userRoutes);
        this.#app.use('/api/semester',semesterRoutes);
        this.#app.use('/api/class',classRouter);
        this.#app.use('/api/faculty',facultyRoutes);
        this.#app.use('/api/uniPrograms',UniProgramsRoutes);
    }
    #configure(){
        this.#app.use(morgan('dev'));
        this.#app.use(express.json());
    }
    listen() {
        this.#app.listen(this.#PORT,(error)=>{
            console.log("server is runnin in port ",this.#PORT);
        })
    }
}
export  default App;