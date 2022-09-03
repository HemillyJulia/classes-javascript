class Person {

    name:string;
    age:number;
    phrase:string


    constructor (name:string, age:number, phrase:string){
        this.name = name;
        this.age = age;
        this.phrase = phrase

    }

    humilhar (){
        console.log (` Meu nome é ${this.name}`)
        console.log (`Gosto de humilhar as pessoas falando ${this.phrase}`)
    }
}

export default Person