import { User } from "../entities/user";

export interface UserRepository {
    getUsers(perPage:Number , page:Number) : Promise<User[]>;
};
 
