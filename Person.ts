class Person {
    name:string;
    age:number;

       constructor (name:string, age:number){
        this.name = name;
        this.age = age;
        
    }

    sayMyName(){
        console.log (` Meu nome é ${this.name}`)
        
    }
}

export default Person