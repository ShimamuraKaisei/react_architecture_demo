import { User } from "../../domain/entities/user";


export interface UserDataSource {
    getUsers(perPage: Number, page: Number):Promise<User[]>
}

