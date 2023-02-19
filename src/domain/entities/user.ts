 
export class User {
    readonly id:string;
    readonly birthday:Date;
    readonly gender:string;
    readonly name:string;
    readonly email:string;
    readonly phone:string;
    readonly picture:string;


    constructor(id:string,birthday:Date,gender: string, email: string , name:string , phone:string , picture:string) {
        this.id = id;
        this.birthday = birthday;
        this.gender = gender;
        this.email = email;
        this.name = name;
        this.phone = phone;
        this.picture = picture;
    }
};