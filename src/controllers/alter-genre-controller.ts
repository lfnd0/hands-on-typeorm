import { Request, Response } from "express";
import { AlterGenreService } from "../services/alter-genre-service";

export class AlterGenreController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, description } = request.body;

    const service = new AlterGenreService();
    const result = await service.execute({ id, name, description });

    if (result instanceof Error) {
      return response.status(400).json({
        message: result.message,
        status: response.statusCode
      });
    }

    return response.json(result);
  }
}
