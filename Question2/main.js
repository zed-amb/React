import Employee from "./Employee.js";

const zelalem = new Employee("Zelalem", "Fairfield", "571-528-4265", "10/09/1999", "Position1", 10000);
const hong = new Employee("Hong", "China", "542-548-4658", "10/09/1990", "Position2", 9000);
const samuel = new Employee("Samuel", "Fairfield", "571-528-4265", "10/09/1999", "Position3", 12000);

const arrEmployees = [zelalem, hong, samuel];

const topPaid = Employee.highestSalary(arrEmployees);
console.log("Highest salary of the employee:", topPaid);


const aggregateSalary = Employee.totalSalary(arrEmployees);
console.log("Total company salary:", aggregateSalary);