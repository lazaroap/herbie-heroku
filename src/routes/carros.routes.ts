import { Router, response } from 'express';
import { getRepository, getCustomRepository } from 'typeorm';
import Carros from '../models/Carros';
import CarrosRepository from '../repositories/CarrosRepository';


const carroRouter = Router();


carroRouter.post('/', async (request, response) => {
  try{
    const repo = getRepository(Carros);
    const res = await repo.save(request.body);
    return response.status(201).json(res);
  } catch(err) {
    console.log('err.message', err.message);
  }
});

carroRouter.get('/', async (request, response) => {
  try {
    response.json(await getRepository(Carros).find());
  } catch(err) {
    console.log('err.message', err.message);
  }
});

carroRouter.get('/:modelo', async (request, response) => {
  try {
    const repository = getCustomRepository(CarrosRepository);
    const res = await repository.findByModelo(request.params.modelo);
    response.json(res)
  } catch(err) {
    console.log('err.message', err.message);
  }
});

export default carroRouter;
