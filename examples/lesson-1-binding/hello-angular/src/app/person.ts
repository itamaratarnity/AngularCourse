export class Person extends Object {
    firstName:string = '';
    lastName:string = '';
    email:string = '';
    password:string = '';
    age:number = 0;
    constructor(firstName:string, 
                lastName:string, 
                email:string, 
                password:string, 
                age:number) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.age = age;
    }
    override toString(): string {
        return `${this.firstName} ${this.lastName}, Email: ${this.email}, Age: ${this.age}`;
    }
}