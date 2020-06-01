import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Marcas {
  @PrimaryGeneratedColumn('increment')
  id: Number;

  @Column()
  nome: string;
}
