export class Student {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} start eating`);
        setTimeout(() => {
            console.log(`${this.name} finish eating`);
        }, 2500);
    }

    drink() {
        console.log(`${this.name} start drinking`);
        setTimeout(() => {
            console.log(`${this.name} finish drinking`);
        }, 2500);
    }
}
