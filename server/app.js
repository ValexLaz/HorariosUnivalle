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
        this.#app.use(function(req, res, next) {
            // res.header("Access-Control-Allow-Origin", "*");
            const allowedOrigins = ['http://localhost:3000', 'http://gamebrag.onrender.com', 'https://gamebrag.onrender.com'];
            const origin = req.headers.origin;
            if (allowedOrigins.includes(origin)) {
                res.setHeader('Access-Control-Allow-Origin', origin);
            }
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
            res.header("Access-Control-Allow-credentials", true);
            res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
            next();
        });
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