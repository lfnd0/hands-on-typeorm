import { Request, Response } from "express";
import { ListGenresService } from "../services/list-genres-service";

export class ListGenresController {
  async handle(request: Request, response: Response): Promise<Response> {
    const service = new ListGenresService();
    const genres = await service.execute();

    return response.json(genres)
  }
}
