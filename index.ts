import Person from "./Person"
import Student from "./Student"


const person1 = new Person ("Hemilly", 29);


const student1 = new Student ("Fernanda", 10)
student1.colocarFalta (5)

console.log (student1)

student1.colocarFalta(120)

console.log(student1)