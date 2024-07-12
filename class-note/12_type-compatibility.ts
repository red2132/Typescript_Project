// 타입 호환
interface Developer {
    name: string
    skill: string
}

class Person {
    name: string
    skill: string
}

let developer1: Developer
let person: Person
developer1 = new Person()
// 타입 이름이 아니라 각 속성을 보고 같은지 판단

// 함수 비교
let add = (a: number) => {
    //...
}

let sum = (a: number, b: number) => {
    //...
}
// add = sum sum이 받을 수 있는 파라미터가 많으므로 add는 sum이 될 수 없음 
sum = add // sum > add

// 제네릭
interface Empty<T> {

}
let empty1: Empty<string> = {}
let empty2: Empty<number> = {}

empty1 = empty2
empty2 = empty1
// 제네릭이 달라도 같은 타입으로 이해함

// interface NotEmpty<T> {
//     data: T
// }
// let notempty1: NotEmpty<string> = {data: ''}
// let notempty2: NotEmpty<number> = {data: 0}
