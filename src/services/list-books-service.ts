import { AppDataSource } from "../database/data-source";
import { Book } from "../entities/book";

export class ListBooksService {
  async execute(): Promise<Book[]> {
    const bookRepository = AppDataSource.getRepository(Book);
    const books = await bookRepository.find({
      relations: ["genre"]
    })

    return books;
  }
}
