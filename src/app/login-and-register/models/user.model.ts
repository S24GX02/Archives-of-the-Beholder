export class User {

    public userName: string;
    public firstName: string;
    public lastName: string;
    public email: string;
    public activeChar: string;

    constructor(userName: string, firstName: string, lastName: string, email: string, activeChar: string) {

        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.activeChar = activeChar;

    }
}
