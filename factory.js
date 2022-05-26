function Developer(name) {
    this.name = name;
    this.type = "Developer"
}

function Tester(name) {
    this.name = name;
    this.type = "Tester"
}

function EmployeeFactory() {
    this.create = (name, type) => {
        switch (type) {
            case 1:
                return new Developer(name)
                break;
            default:
            return new Tester(name)
                break;
        }
    }
}

function say() {
    console.log(`${this.name} is a ${this.type}`)
}

const employees = []

const employeeFactory = new EmployeeFactory()

employees.push(employeeFactory.create("Suraj", 1))
employees.push(employeeFactory.create("Dutta", 2))
employees.push(employeeFactory.create("Suraj2", 1))

employees.forEach(item => {
    say.call(item)
})