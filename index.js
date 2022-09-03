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

const pessoa1 = new Person ("Hemilly", 20, "Tu é leso é?")
const pessoa2 = new Person ("Alex", 28, "A gata não sabe nem JavaScript")
const pessoa3 = new Person ("Maria Eduarda", 12,"Não sabe nem dançar")

pessoa2.humilhar()