import express, {Express, Request, Response} from "express";
import cors from "cors";
import {stickynotes, user} from "./services";
import {buscarUser, userExiste, validaUser} from "./middlewares";
import {stickynotesExiste, validaStickynotes} from "./middlewares";
//import  router  from "./router"

const app: Express = express();
const port = process.env.PORT || 8081;
app.use(cors());
app.use(express.json()); //router)

app.get("/", (req: Request, res: Response) => {
  return res.status(200).send(`
     <h1>Api Recados!</h1>
     <br>
     <p>Api desenvolvida para o projeto de recados do programa start dev fullstack!</p>
    `);
});
app.get("/users", user.getUserList);
app.get("/login", buscarUser, user.logUser);
app.post("/users", validaUser, userExiste, user.createUser);

app.post("/notes", validaStickynotes, stickynotes.createStickynotes);
app.get("/notes", stickynotes.searchStickynotes);
app.get("/notes/:id", stickynotesExiste, stickynotes.searchStickynotesForId);
app.put("/notes/:id", stickynotesExiste, stickynotes.updateStickynotes);
app.delete("/notes/:id", stickynotesExiste, stickynotes.deleteStickynotes);

app.listen(port, () => console.log("server estatus: positivo e operante!"));
