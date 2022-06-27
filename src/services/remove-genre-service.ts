import { AppDataSource } from "../database/data-source";
import { Genre } from "../entities/genre";

export class RemoveGenreService {
  async execute(id: string): Promise<void | Error> {
    const genreRepository = AppDataSource.getRepository(Genre);

    if (!(await genreRepository.findOne({ where: { id } }))) {
      return new Error("Genre does not exists");
    }

    await genreRepository.delete(id);
  }
}
