import "dotenv/config";
import express from "express";
import Hello from "./hello.js";
import Lab5 from "./lab5.js";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

Lab5(app);
CourseRoutes(app);
ModuleRoutes(app);
Hello(app);
app.listen(process.env.PORT || 4000);

