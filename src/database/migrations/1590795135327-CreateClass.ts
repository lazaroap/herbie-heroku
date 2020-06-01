import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateClass1590795135327 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'usuarios',
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
            {
              name: 'email',
              type: 'varchar',
            },
            {
              name: 'senha',
              type: 'varchar',
            },

          ]

        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      queryRunner.dropTable('usuarios')
    }

}
