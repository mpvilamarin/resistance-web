import  express  from "express";
import routes from "../src/routes/route.js"
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(express.json())
app.use(routes)


export default app