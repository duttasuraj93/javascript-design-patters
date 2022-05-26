function CryptocurrencyAPI() {
    this.getValue = function (coin) {
        console.log("Calling external api");
        switch (coin) {
            case "Bitcoin":
                return "10000"
                break;
            case "Eth":
                return "3000"
                break;
            default:
                return "100"
                break;
        }
    }
}

function CryptocurrencyProxy() {
    this.api = new CryptocurrencyAPI()
    this.cache = {}

    this.getValue = function(coin) {
        if(this.cache[coin] == null) {
            this.cache[coin] = this.api.getValue(coin)
        }
        return this.cache[coin]
    }
}

const proxy = new CryptocurrencyProxy()
console.log(proxy.getValue("Eth"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Eth"));