import axios from "axios";
import { json } from "react-router-dom";
import { User } from "../../domain/entities/user";
import { UserRepository } from "../../domain/repositories/userRepository";
import { UserModel } from "../model/userModel";


//ここでRepositoryの中身を実装

export class UserRepositoryImpl implements UserRepository  {
    baseUrl: string = `https://randomuser.me/api/`;


    async getUsers(perPage: Number, page: Number): Promise<User[]> {
        let userArray:User[] = [];
        try {
            let value = await axios.get(`${this.baseUrl}?page=${page}&format=json&results=${perPage}`);
            if (value.status === 200 || value.status === 201) {
                value.data.results.forEach(function(result: any){
                    const user =  new UserModel(result);
                    userArray.push(user);
                });
            }
        } catch (error) {
            throw new Error("Method not implemented.");
        }
        return userArray;
    }
}

