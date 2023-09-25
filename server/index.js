import database from "./config/db.js";
import App from "./app";
const app = new App();
app.listen();
database.connect();


