import { AppDataSource } from "../database/data-source";
import { Genre } from "../entities/genre";

interface IGenreRequest {
  name: string,
  description: string
}

export class CreateGenreService {
  async execute({ name, description }: IGenreRequest): Promise<Genre | Error> {
    const genreRepository = AppDataSource.getRepository(Genre);

    const genre = genreRepository.create({
      name, description
    });

    if (await genreRepository.findOne({ where: { name } })) {
      return new Error("Genre already exists");
    }

    await genreRepository.save(genre);

    return genre;
  }
}
