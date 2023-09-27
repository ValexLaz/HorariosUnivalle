import express from "express";
import config from "./config/config.js";
import userRoutes from "./modules/users/user.routes.js";
import semester_routes from "./modules/semesters/semesters.routes.js";
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
        this.#app.use('/api/semester',semester_routes);
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