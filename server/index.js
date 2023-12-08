import database from "./config/db.mjs";
import App from "./app.js";
const app = new App();
app.listen();
database.connect();


