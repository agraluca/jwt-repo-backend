import express from "express";
import { checkToken } from "../utils/index.js";

import * as UserController from "../controller/User.js";

const routes = express.Router();

//Public Route
routes.get("/", (req, res) => res.send("Funcionando"));

//Private Route: uses Middleware function to checkToken
routes.get("/user/:id", checkToken, UserController.userProfile);

routes.post("/auth/register", UserController.createUser);

routes.post("/auth/signin", UserController.sigInUser);

routes.post("/auth/refresh", checkToken, UserController.refreshToken);

export default routes;
