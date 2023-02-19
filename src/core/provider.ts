import { User } from "../domain/entities/user";
import { UserRepository } from "../domain/repositories/userRepository";
import { UserRepositoryImpl } from "../infrastracture/repositories/userRepositoryImpl";
import { DummyUserRepositoryImpl } from "../infrastracture/dummyRepositories/dummyUserRepositories";

export const userRepositoryProvider:UserRepository = new UserRepositoryImpl;
// export const userRepositoryProvider:UserRepository = new DummyUserRepositoryImpl;