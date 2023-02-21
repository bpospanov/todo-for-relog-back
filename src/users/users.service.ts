import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from '../ninjas/dto/create-ninja.dto';
import { UpdateNinjaDto } from '../ninjas/dto/update-ninja.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateNinjaDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateNinjaDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
