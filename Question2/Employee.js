import { People } from "../People.js";

export default class Employee extends People {
    constructor(name, address, phone, DOB, position, salary) {
        super(name, address, phone, DOB);
        this.position = position;
        this.salary = salary;
    }


    static highestSalary(employees) {
        if (employees.length === 0) {
            return null;
        } else {
            return employees.find(emp =>
                employees.salary === Math.max(...employees.map(em => em.salary))
            )
        }
    }

    static totalSalary(employees) {
        employees.reduce((tot, emp) => tot + emp.salary, 0)
    }
}

