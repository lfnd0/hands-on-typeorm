import { Router } from "express";

import { CreateGenreController } from "../controllers/create-genre-controller";

export const genresRouter = Router();

const createGenreController = new CreateGenreController()

genresRouter.post("/", createGenreController.handle)
