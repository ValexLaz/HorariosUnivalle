import mongoose from "mongoose";
import config from "./config.mjs";

class Database{
    constructor() {
        
        this.URI = config.Database.URI_MONGODB;
        this.isConnected = false;
    }
    connect() {
        if(!this.isConnected) {
            mongoose
                .connect(this.URI)
                .then(()=>{
                    this.isConnected = true;
                    console.log('Database connected');
                })
                .catch(error => console.log(error));
        }
    }
}
const database = new Database();
export default database;
