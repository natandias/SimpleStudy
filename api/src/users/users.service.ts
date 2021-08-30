import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { FindOneUserDto } from './dto/FindOneUserDto.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: string, findOneUserDto?: FindOneUserDto): Promise<User> {
    const { includeSchoolYears } = findOneUserDto;
    const relations = [];
    if (includeSchoolYears && includeSchoolYears === 'true')
      relations.push('schoolYears');

    return this.usersRepository.findOne({
      where: { id, deletedAt: null },
      relations,
    });
  }

  async findByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({ email });
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(user);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.usersRepository.findOne(id);

    const { email, password, username } = updateUserDto;

    user.username = username;
    user.email = email;
    user.password = password;

    return this.usersRepository.save(user);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.softDelete(id);
  }
}
