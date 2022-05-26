function Fedex() {
    this.calculate = (package) => {
        return package.weight;
    }
}

function DHL() {
    this.calculate = (package) => {
        return package.weight;
    }
}

function Shipping() {
    this.company = ""
    this.setStrategy = (company) => {
        this.company = company
    }
    this.calculate = (package) => {
        return this.company.calculate(package)
    }
}

const fedex = new Fedex()
const package = {from: "Japan", to: "USA", weight: 10}

const shipping = new Shipping()
shipping.setStrategy(fedex)

console.log(shipping.calculate(package));