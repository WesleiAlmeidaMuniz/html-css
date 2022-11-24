const visitorNew = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
    gtc: {
      signed: true,
      version: '2.1',
    },
};

const visitorOld = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
  };

function createVisitor(name, age, ticketId) {
    var visitor = new Object()
    visitor.name = name
    visitor.age = age
    visitor.ticketId = ticketId

    return visitor
}

function ticketStatus(string){
    const tickets = {
        '0H2AZ123': null,
        '23LA9T41': 'Verena Nardi',
    };

    console.log(typeof tickets[string])
    console.log(tickets)
    if (tickets[string] === null || typeof tickets[string] === 'undefined') {
        return 'invalid ticket !!!'
    } else {
        return `sold to ${tickets[string]}`
    }
}

function gtcVersion(){

    const visitorNew = {
        name: 'Verena Nardi',
        age: 45,
        ticketId: 'H32AZ123',
        gtc1: {
          signed: true,
          version: '2.1',
        },
    };
    //console.log(visitorNew.gtc.version)
    if (typeof visitorNew.gtc !== 'undefined'){
        return visitorNew.gtc.version
    } else {
        return undefined
    }
}

console.log(gtcVersion())
