import { Request, Response } from "express";
import { RemoveGenreService } from "../services/remove-genre-service";

export class RemoveGenreController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const service = new RemoveGenreService();

    const result = await service.execute(id);
    if (result instanceof Error) {
      return response.status(400).json({
        message: result.message,
        status: response.statusCode
      });
    }

    return response.status(204).end();
  }
}
