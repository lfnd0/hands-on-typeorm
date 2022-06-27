import { Request, Response } from "express";
import { ListBooksService } from "../services/list-books-service";

export class ListBooksController {
  async handle(request: Request, response: Response): Promise<Response>{
    const service = new ListBooksService();
    const books = await service.execute();

    return response.json(books);
  }
}
