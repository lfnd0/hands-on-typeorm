import { Router } from "express";

import { CreateGenreController } from "../controllers/create-genre-controller";
import { ListGenresController } from "../controllers/list-genres-controller";
import { RemoveGenreController } from "../controllers/remove-genre-controller";

export const genresRouter = Router();

const createGenreController = new CreateGenreController()
const listGenresController = new ListGenresController()
const removeGenreController = new RemoveGenreController()

genresRouter.post("/", createGenreController.handle)
genresRouter.get("/", listGenresController.handle)
genresRouter.delete("/:id", removeGenreController.handle)
