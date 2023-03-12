import { User } from "../../domain/entities/user";
import { UserRepository } from "../../domain/repositories/userRepository";
import { UserDataSource } from "../datasource/userDataSource";


//ここでRepositoryの中身を実装

export class UserRepositoryImpl implements UserRepository  {
    dataSource:UserDataSource;
    constructor(_dataSource:UserDataSource){
        this.dataSource = _dataSource
    }
    
    async getUsers(perPage: Number, page: Number): Promise<User[]> {
        return this.dataSource.getUsers(perPage,page);
    }
}

