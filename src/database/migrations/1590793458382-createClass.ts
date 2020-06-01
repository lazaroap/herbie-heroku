import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateClass1590793458382 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'carros',
          columns: [
            {
              name: 'id',
              type: 'integer',
              isPrimary: true,
              generationStrategy: 'increment',
              isGenerated: true,
            },
            {
              name: 'modelo',
              type: 'varchar',
            },
            {
              name: 'cor',
              type: 'varchar',
            },
            {
              name: 'ano',
              type: 'integer',
            },
            {
              name: 'preco',
              type: 'float',
            },
            {
              name: 'foto',
              type: 'varchar',
            },
            {
              name: 'destaque',
              type: 'varchar',
            },
            {
              name: 'data_cad',
              type: 'timestamp',
              default: 'now()',
            },
          ]

        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      queryRunner.dropTable('carros')
    }

}
