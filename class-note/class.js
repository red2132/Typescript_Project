// ES6 이전 문법
function Person(name, age) {
    this.name = name
    this.age = age
}

// 객체 지향 기능 도입

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

let seho = new Person('세호', '30')