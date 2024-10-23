class Employee {
    #salary;
    #isHired = true;
    constructor(name, position, salary){
        this.name = name;
        this.position = position;
        this.#salary = salary;
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


    
}

module.exports = {
    Employee,
}
