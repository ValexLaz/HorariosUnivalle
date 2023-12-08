import express from "express";
import config from "./config/config.mjs";
import router from "./routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
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
        this.#app.use('/api',router);
    }
    #configure(){
        this.#app.use(cors({
            origin: 'http://localhost:3000',
            credentials: true
          }));
        this.#app.use(cookieParser());
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