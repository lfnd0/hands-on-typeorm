import {Router} from "express";
import { genresRouter } from "./genres.routes";

export const router = Router()

router.use("/genres", genresRouter);
