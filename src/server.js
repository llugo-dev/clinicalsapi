import express from "express";
import bodyParser from "body-parser";
import properties from "./config/properties.js";
import routes from "./routes.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let clinicalRouter = express.Router();
routes(clinicalRouter);
app.use("/clinicalsapi", clinicalRouter);


app.listen(properties.PORT, (err) => {
    if (err) console.log(err);
    console.log("Application started on port " + properties.PORT);
});



