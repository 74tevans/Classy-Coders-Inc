class Employee {
    #salary;
    #isHired = true;
    static #allEmployees = [];
    constructor(name, position, salary){
        this.name = name;
        this.position = position;
        if (salary < 0){
            throw new Error("Salary cannot be negative");
        }
        this.#salary = salary;
        Employee.#allEmployees.push(this);
    }
    getSalary(){
        return this.#salary;
    }
    setSalary(amount){
        this.#salary = amount;
    }
    getStatus(){
        return this.#isHired;
    }
    setStatus(command){
        if (command === 'hire'){
            this.#isHired = true;
        }
        else if (command === 'fire'){
            this.#isHired = false;
        }
    }
    static getEmployees(){
        return Employee.#allEmployees;
    }
    static getTotalPayroll(){
        let total = 0;
        for (let employee of Employee.#allEmployees){
            total += employee.getSalary()
        }
        return total;
    }   
}

module.exports = {Employee};
