import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Financiamentos {
  @PrimaryGeneratedColumn('increment')
  id: Number;

  @Column()
  entrada: Number;

  @Column()
  parcelas: Number;

  @Column()
  mensagem: string;

}
