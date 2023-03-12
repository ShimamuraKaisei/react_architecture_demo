import axios from "axios";
import { ValidationError } from "../../../core/error";
import { User } from "../../../domain/entities/user";
import { UserDataSource } from "../userDataSource";
import { UserModel } from "./model/userModel";

export class UserDataSourceImpl implements UserDataSource {

    baseUrl: string = `https://randomuser.me/api/`;

    async getUsers(perPage: Number, page: Number): Promise<User[]> {
        let userArray:User[] = [];
        let value = await axios.get(`${this.baseUrl}?page=${page}&format=json&results=${perPage}`);
        if ((value.status === 200 || value.status === 201) &&( value.data.results.length !== 0 ) && page !== 0 && perPage !== 0) {
            value.data.results.forEach(function(result: any){
                const user =  new UserModel(result);
                userArray.push(user);
            });
        }else if(page == 0 || perPage == 0){
            throw new ValidationError(`無効な引数です。1以上を指定してください`);
        }
        return userArray;
    }
}