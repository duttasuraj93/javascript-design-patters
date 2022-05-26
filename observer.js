function Subject() {
    this.observers = []
}

Subject.prototype = {
    subscribe: function(fn) {
        this.observers.push((fn))
    },
    unsubscribe: function(fn) {
        this.observers = this.observers.filter(i => i !== fn)
    },
    fire: function() {
        this.observers.forEach(fn => {
            fn.call()
        })
    }
}

const subject = new Subject()

function Observer1() {
    console.log("Observer 1 firing");
}

function Observer2() {
    console.log("Observer 2 firing");
}

subject.subscribe(Observer1)
subject.subscribe(Observer2)
subject.unsubscribe(Observer1)
subject.fire()