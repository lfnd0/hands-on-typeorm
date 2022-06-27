import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateBooks1656274774113 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "books",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar"
          },
          {
            name: "description",
            type: "varchar"
          },
          {
            name: "pages",
            type: "numeric"
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()"
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()"
          },
          {
            name: "genre_id",
            type: "uuid"
          },
        ],
        foreignKeys: [
          {
            name: "fk_genre_book",
            columnNames: ["genre_id"],
            referencedTableName: "genres",
            referencedColumnNames: ["id"]
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("books");
  }
}
