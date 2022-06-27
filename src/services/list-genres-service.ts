import { AppDataSource } from "../database/data-source";
import { Genre } from "../entities/genre";

export class ListGenresService {
  async execute(): Promise<Genre[]> {
    const genreRepository = AppDataSource.getRepository(Genre);
    const genres = await genreRepository.find();

    return genres;
  }
}
