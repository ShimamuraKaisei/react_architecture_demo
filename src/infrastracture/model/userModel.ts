import { User } from "../../domain/entities/user";

//何から作られるか知ってる
export class UserModel extends User {
    constructor(json:any){
        super(
            json[`login`][`uuid`],
            json[`dob`][`date`],
            json[`gender`],
            json[`email`],
            `${json[`name`][`title`]} ${json[`name`][`first`]} ${json[`name`][`last`]}`,
            json[`phone`],
            json[`picture`][`large`]
        );
    }
}