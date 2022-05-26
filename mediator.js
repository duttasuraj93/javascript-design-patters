function Member(name) {
    this.name = name
    this.chatroom = null
}

Member.prototype = {
    send: function(message, toMember) {
        this.chatroom.send(message, this, toMember)
    },
    receive: function(message, fromMember) {
        console.log(`${fromMember.name} to ${this.name}: ${message}`);
    }
}

function Chatroom() {
    this.members = {}
}

Chatroom.prototype = {
    addMember: function(member) {
        this.members[member.name] = member
        member.chatroom = this
    },
    send: function(message, fromMember, toMember) {
        toMember.receive(message, fromMember)
    }
}

const chat = new Chatroom()
const suraj = new Member("Suraj")
const john = new Member("John")
const tim = new Member("Tim")

chat.addMember(suraj)
chat.addMember(john)
chat.addMember(tim)

suraj.send("Hey John", john)
john.send("Hey Suraj", suraj)