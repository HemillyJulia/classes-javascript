import Person from "./Person";

type frequency = "FREQUENTE" | "INFREQUENTE"

class Student extends Person {

    grade:number;
    faltas:number;
    frequency:frequency;

    constructor (name:string, age:number) {
        super(name, age);

        this.grade = 0;
        this.faltas=0;
        this.frequency = "FREQUENTE"

    }

    colocarFalta (numeroDeFaltas:number){
        const totalDeFaltas = this.faltas + numeroDeFaltas;
        this.faltas = totalDeFaltas;

        this.updateFrequency ()
    }

    updateFrequency() {
        if (this.faltas >= 120) {
            this.frequency = "INFREQUENTE"
        } else {
            this.frequency = "FREQUENTE"
        }
    }
}

export default Student