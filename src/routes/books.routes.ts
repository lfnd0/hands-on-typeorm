import { Router } from "express";
import { CreateBookController } from "../controllers/create-book-controller";
import { ListBooksController } from "../controllers/list-books-controller";

export const booksRouter = Router();

const createBookController = new CreateBookController();

booksRouter.post("/", createBookController.handle);
