// JS 문자열 선언
// var str = 'hello'
// let str = 'hello'

// TS 문자열 선언
let str: string = 'hello'

// TS 숫자 선언
let num: number = 10

// TS Array 선언
let arr: Array<number> = [1,2,3]
let heroes: Array<string> = ['Capt', 'Thor', 'Hulk']
let items: number[] = [1,2,3]

// TS 튜플 선언(요소 개수 고정, 각 인덱스마다 타입 고정됨)
let address: [string, number] = ['gangnam', 100]

// TS 객체 선언
let obj: object = {}
let person: object = {
    name: 'capt',
    age: 100
}
let person2: {name: string, age: number} = {
    name: 'thor',
    age: 1000
}

// TS 진위값
let show: boolean = true