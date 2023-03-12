import { User } from "../../../domain/entities/user";
import { UserDataSource } from "../userDataSource";

export class DummyUserDataSourceImpl implements UserDataSource{

    async getUsers(perPage: Number, page: Number): Promise<User[]> {
        let userArray:User[] = [];
        let testDate = new Date()
        const testUser = new User(`test_id` , testDate, `test_gender` , `test_email` , `test_name` , `test_phone` , `test_picture`);
        userArray.push(testUser);
        return userArray;
    }
}