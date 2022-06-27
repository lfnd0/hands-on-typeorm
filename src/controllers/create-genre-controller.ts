import { Request, Response } from "express";
import { CreateGenreService } from "../services/create-genre-service";

export class CreateGenreController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    const service = new CreateGenreService();

    const result = await service.execute({ name, description });
    if (result instanceof Error) {
      return response.status(400).json({
        message: result.message,
        status: response.statusCode
      });
    }

    return response.status(201).json(result);
  }
}
