import { Request, Response } from "express";
import { CreateBookService } from "../services/create-book-service";

export class CreateBookController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description, pages, genre_id } = request.body;
    const service = new CreateBookService();

    const result = await service.execute({
      name,
      description,
      pages,
      genre_id
    });
    if (result instanceof Error) {
      return response.status(400).json({
        message: result.message,
        status: response.statusCode
      });
    }

    return response.status(201).json(result);
  }
}
