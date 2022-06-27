import { AppDataSource } from "../database/data-source"
import { Genre } from "../entities/genre"

interface IGenreRequest {
  id: string,
  name: string,
  description: string
}

export class AlterGenreService {
  async execute({ id, name, description }: IGenreRequest): Promise<Genre | Error> {
    const genreRepository = AppDataSource.getRepository(Genre);

    const genre = await genreRepository.findOne({ where: { id } });
    if (!genre) {
      return new Error("Genre does not exists");
    }

    genre.name = name ? name : genre.name;
    genre.description = description ? description : genre.description;
    genre.updated_at = new Date();

    await genreRepository.save(genre);

    return genre;
  }
}
