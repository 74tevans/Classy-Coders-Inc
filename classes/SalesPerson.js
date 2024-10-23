const {Employee} = require('./Employee.js');
class SalesPerson extends Employee{
    #totalSales = 0;
    constructor(name, position, salary, clients){
        super(name, position, salary);
        this.clients = clients;
    }
    getSalesNumber(){
        return this.#totalSales;
    }
    makeSale(amount){
        this.#totalSales += amount;
    }
    findClient(client){
        for (person of clients){
            if (person === client){
                return person;
            }
        }
        return `No clients matching ${client} found`;
    }
}

module.exports = {SalesPerson};