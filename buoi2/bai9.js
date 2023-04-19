var Employee = /** @class */ (function () {
    function Employee(ids, firstNames, lastNames, salarys) {
        this.id = ids;
        this.firstName = firstNames;
        this.lastName = lastNames;
        this.salary = salarys;
    }
    Employee.prototype.getId = function () {
        return this.id;
    };
    Employee.prototype.getFirstName = function () {
        return this.firstName;
    };
    Employee.prototype.getLastName = function () {
        return this.lastName;
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    Employee.prototype.setSalary = function (x) {
        return this.salary = x;
    };
    Employee.prototype.getFullName = function () {
        return this.getFirstName() + "" + this.getLastName();
    };
    Employee.prototype.getAnnualSalary = function () {
        return this.getSalary() * 12;
    };
    Employee.prototype.upToSalary = function (x) {
        return this.getSalary() + (this.getSalary() * 10) / 100;
    };
    return Employee;
}());
var a = new Employee(123, 'Dung', 'Nguyen', 500000);
console.log(a.setSalary(500));
console.log(a.getFullName());
console.log(a.getAnnualSalary());
console.log(a.upToSalary(15));
