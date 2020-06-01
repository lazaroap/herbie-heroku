import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateClass1590794994948 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'marcas',
          columns: [
            {
              name: 'id',
              type: 'integer',
              isPrimary: true,
              generationStrategy: 'increment',
              isGenerated: true,
            },
            {
              name: 'nome',
              type: 'varchar',
            },

          ]

        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      queryRunner.dropTable('marcas')
    }

}
