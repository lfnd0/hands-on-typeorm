import { Router } from "express";

import { CreateGenreController } from "../controllers/create-genre-controller";
import { ListGenresController } from "../controllers/list-genres-controller";

export const genresRouter = Router();

const createGenreController = new CreateGenreController()
const listGenresController = new ListGenresController()

genresRouter.post("/", createGenreController.handle)
genresRouter.get("/", listGenresController.handle)
