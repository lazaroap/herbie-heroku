import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Usuarios {
  @PrimaryGeneratedColumn('increment')
  id: Number;

  @Column()
  nome: string;

  @Column()
  modelo: string;

  @Column()
  senha: string;
}
