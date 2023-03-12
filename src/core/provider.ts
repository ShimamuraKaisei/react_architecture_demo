import { User } from "../domain/entities/user";
import { UserRepository } from "../domain/repositories/userRepository";
import { UserRepositoryImpl } from "../infrastracture/repositories/userRepositoryImpl";
import { UserDataSourceImpl } from "../infrastracture/datasource/api/userDataSourceImpl";
import { DummyUserDataSourceImpl } from "../infrastracture/datasource/api/dummyUserDataSource";


const userDataSource = new UserDataSourceImpl;
// const userDataSource = new DummyUserDataSourceImpl;


export const userRepositoryProvider:UserRepository = new UserRepositoryImpl(userDataSource);
