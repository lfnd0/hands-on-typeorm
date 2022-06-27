import { AppDataSource } from "../database/data-source";
import { Book } from "../entities/book";
import { Genre } from "../entities/genre";

interface IBookRequest {
  name: string,
  description: string,
  pages: number,
  genre_id: string
}

export class CreateBookService {
  async execute({ name, description, pages, genre_id }: IBookRequest): Promise<Book | Error> {
    const genreRepository = AppDataSource.getRepository(Genre);
    if (!(await genreRepository.findOne({ where: { id: genre_id } }))) {
      return new Error("Genre does not exists");
    }

    const bookRepository = AppDataSource.getRepository(Book);
    const book = bookRepository.create({
      name, description, pages, genre_id
    });

    await bookRepository.save(book);

    return book;
  }
}
