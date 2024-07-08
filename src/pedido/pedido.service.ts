import { Injectable } from '@nestjs/common';
import { CreatePedidoInput } from './dto/create-pedido.input';
import { UpdatePedidoInput } from './dto/update-pedido.input';

@Injectable()
export class PedidoService {
  create(createPedidoInput: CreatePedidoInput) {
    return 'This action adds a new pedido';
  }

  findAll() {
    return `This action returns all pedido`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pedido`;
  }

  update(id: number, updatePedidoInput: UpdatePedidoInput) {
    return `This action updates a #${id} pedido`;
  }

  remove(id: number) {
    return `This action removes a #${id} pedido`;
  }
}
