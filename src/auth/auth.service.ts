import { Body, HttpException, HttpStatus, Injectable, Post, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { JwtService } from "@nestjs/jwt";
import bcrypt from "node_modules/bcryptjs";
import { User } from '../users/users.model';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async login(userDto: CreateUserDto) {
    const user = await this.validateUser(userDto);
    return this.generateToken(user!);
  }

  async registration(userDto: CreateUserDto) {
    const candidate = await this.usersService.getUserByEmail(userDto.email);
    if (candidate) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
    const hashedPassword = await bcrypt.hash(userDto.password, 10);
    const user = await this.usersService.createUser({...userDto, password: hashedPassword});
    console.log(user);
    return this.generateToken(user);
  }
  private async generateToken(user: User) {
    const payload = {email: user.email, id: user.id, roles: user.roles};
    console.log(payload);
    return {
      token: this.jwtService.sign(payload)
    }
  }
  private async validateUser(userDto: CreateUserDto) {
    const user = await this.usersService.getUserByEmail(userDto.email)
    console.log(user);
    if (!user) throw new UnauthorizedException('Invalid email or password');
    const passwordEquals = await bcrypt.compare(userDto.password, user!.password);
    if (user && passwordEquals) {
      return user
    }
    throw new UnauthorizedException('Invalid email or password');
  }
}
