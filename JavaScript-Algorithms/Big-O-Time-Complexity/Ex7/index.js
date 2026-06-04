class Employees {
  constructor() {
    this.emloyeesObject = {};
    this.emloyeesObjectLength = 0;
  }

  add(id, name, age, salary) {
    this.emloyeesObject[id] = { name, age, salary };
    this.emloyeesObjectLength++;
  }

  exists(id) {
    return id in this.emloyeesObject;
  }

  findEmployeeSalary(id) {
    return this.emloyeesObject[id] ? this.emloyeesObject[id].salary : null;
  }
}

const registry = new Employees();

registry.add("ax01", "Ray", 28, 1300);

console.log(registry.exists("ax01"));
console.log(registry.findEmployeeSalary("ax01"));
console.log(registry.findEmployeeSalary("fake"));
