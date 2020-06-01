import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateClass1590795252050 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'financiamentos',
          columns: [
            {
              name: 'id',
              type: 'integer',
              isPrimary: true,
              generationStrategy: 'increment',
              isGenerated: true,
            },
            {
              name: 'entrada',
              type: 'float',
            },
            {
              name: 'parcelas',
              type: 'integer',
            },
            {
              name: 'mensagem',
              type: 'varchar',
            },

          ]

        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      queryRunner.dropTable('financiamentos')
    }

}
