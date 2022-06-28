import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class AddWriterBook1656382425354 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn("books",
      new TableColumn({
        name: "writer",
        type: "varchar"
      }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("books", "writer");
  }

}
