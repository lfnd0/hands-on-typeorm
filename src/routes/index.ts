import {Router} from "express";

import { booksRouter } from "./books.routes";
import { genresRouter } from "./genres.routes";

export const router = Router()

router.use("/genres", genresRouter);
router.use("/books", booksRouter)
