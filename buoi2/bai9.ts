class Employee {
    public id: number
    public firstName: string
    public lastName: string
    public salary: number

    constructor(ids: number, firstNames: string, lastNames: string, salarys: number) {
        this.id = ids
        this.firstName = firstNames
        this.lastName = lastNames
        this.salary = salarys
    }

    getId(): number {
        return this.id
    }

    getFirstName(): string {
        return this.firstName
    }

    getLastName(): string {
        return this.lastName
    }

    getSalary(): number {
        return this.salary
    }

    setSalary(x: number): number {
        return this.salary = x
    }

    getFullName(): string {
        return this.getFirstName() + "" + this.getLastName()
    }

    getAnnualSalary ():number {
        return this.getSalary() * 12
    }

    upToSalary (x : number):number {
        return this.getSalary() + (this.getSalary() * 10) / 100
    }
}

let a = new Employee(123, 'Dung', 'Nguyen', 500000)
console.log(a.setSalary(500));
console.log(a.getFullName());
console.log(a.getAnnualSalary());
console.log(a.upToSalary(15));



