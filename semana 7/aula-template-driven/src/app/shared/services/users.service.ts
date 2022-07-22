import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: Array<User> = [
    {
      id: 1,
      nome: 'Luis',
      email: 'luispds@msn.com',
      senha: "123456"
    },
    {
      id: 2,
      nome: 'Alan',
      email: 'alan@gmail.com',
      senha: "123456"
    }
  ];

  constructor() { }

  getUsers() {
    return this.users;
  }

  getUserByEmailAndPassword(email: string, password: string) {
    return this.users.find(p => p.email === email && p.senha === password);
  }
}
