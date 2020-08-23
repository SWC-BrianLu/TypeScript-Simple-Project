class CPersonInfo {
    name: string
    age: number
    hasPet: boolean

    constructor(name: string, age: number, hasPet: boolean) {
        this.name = name
        this.age = age
        this.hasPet = hasPet
    }

    printInfo() {
        console.log(`
            Name: ${this.name}
            Age: ${this.age}
            Owns a pet? ${this.hasPet}
        `);
    }
}


const mark = new CPersonInfo('Mark', 21, false)

mark.printInfo()

//----------------------------------------------------------------------

type TUserAccount = {
    account: string;
    password: string;
    money: number;
}

// interface ICashMachine {
//     deposit(amount: number): void;
//     withdraw(amount: number): void;
//     users: TUserAccount[]
//     currentUser: TUserAccount | undefined
//     singIn(account: string, password: string): void
//     singOut(): void
// }

interface AccountSystem {
    signIn(account: string, password: string): void;
    signOut(): void;
}

interface TransactionSystem {
    deposit(amount: number): void;
    withdraw(amount: number): void;
}

interface ICashMachine extends AccountSystem, TransactionSystem { }


class CashMachine implements ICashMachine {

    users: TUserAccount[] = [
        { account: 'Fadatsu001', password: 'aaaa1234', money: 666 },
        { account: 'Fadatsu002', password: 'aaaa1234', money: 777 },
        { account: 'Fadatsu003', password: 'aaaa1234', money: 888 },
    ]

    currentUser: TUserAccount | undefined

    signIn(account: string, password: string): void {
        throw new Error("Method not implemented.")
    }
    signOut(): void {
        throw new Error("Method not implemented.")
    }
    deposit(amount: number): void {
        throw new Error("Method not implemented.")
    }
    withdraw(amount: number): void {
        throw new Error("Method not implemented.")
    }

}