import {Entity, Column, CreateDateColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export default class Carros {

  @PrimaryGeneratedColumn('increment')
  id: Number;

  @Column({
    length:100,
  })
  modelo: string;

  @Column()
  cor: string;

  @Column()
  ano: Number;

  @Column()
  preco: Number;

  @Column()
  foto: string;

  @Column({
    length:1,
  })
  destaque: string;

  @CreateDateColumn()
  data_cad: Date;

}
