import { EntityRepository, Repository } from 'typeorm';
import Carros from '../models/Carros';

@EntityRepository(Carros)
export default class CarrosRepository extends Repository<Carros> {
  public async findByModelo(modelo: string): Promise<Carros[]> {
    return this.find({
      where: {
        modelo,
      },
    });
  }
}
