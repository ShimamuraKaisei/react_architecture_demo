import { User } from "../../domain/entities/user";
import { UserRepository } from "../../domain/repositories/userRepository";


export class DummyUserRepositoryImpl implements UserRepository {
    async getUsers(perPage: Number, page: Number): Promise<User[]> {
        let userArray:User[] = [];
        let testDate = new Date()
        const testUser = new User(`test_id` , testDate, `test_gender` , `test_email` , `test_name` , `test_phone` , `test_picture`);
        userArray.push(testUser);
        return userArray;
    }
}
