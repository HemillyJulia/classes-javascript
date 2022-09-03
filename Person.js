class Person {
    constructor (name, age, phrase){
        this.name = name;
        this.age = age;
        this.phrase = phrase

    }

    humilhar (){
        console.log (` Meu nome é ${this.name}`)
        console.log (`Gosto de humilhar as pessoas falando ${this.phrase}`)
    }
}

module.exports = Person