import express, {Express} from "express";
import cors from "cors";
import {stickynotes, user} from "./services";
import {userExiste, validaUser} from "./middlewares";
import {stickynotesExiste, validaStickynotes} from "./middlewares";
//import  router  from "./router"

const app: Express = express();
const port = process.env.PORT || 8081;
app.use(cors());
app.use(express.json()); //router)

app.get("/users", user.searchUser);
app.get("/usersLogon/:id", userExiste, user.logUser);
app.post("/users", validaUser, user.createUser);

app.post("/notes", validaStickynotes, stickynotes.createStickynotes);
app.get("/notes", stickynotes.searchStickynotes);
app.get("/notes/:id", stickynotesExiste, stickynotes.searchStickynotesForId);
app.put("/notes/:id", stickynotesExiste, stickynotes.updateStickynotes);
app.delete("/notes/:id", stickynotesExiste, stickynotes.deleteStickynotes);

app.listen(port, () => console.log("server estatus: positivo e operante!"));
