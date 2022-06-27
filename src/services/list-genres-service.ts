import { AppDataSource } from "../database/data-source";
import { Genre } from "../entities/genre";

export class ListGenresService {
  async execute(): Promise<Genre[]> {
    const genresRepository = AppDataSource.getRepository(Genre);
    const genres = await genresRepository.find();

    return genres;
  }
}
