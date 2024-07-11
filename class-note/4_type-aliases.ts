interface Person {
    name: string,
    age: number
}

type Person2 = {
    name: string,
    age: number
}

let seho: Person = {
    name: '세호',
    age: 20
}

let seho2: Person2 = {
    name: '세호2',
    age: 20
}
// 차이점: 확장 가능 & 불가능 여부
// type은 그저 요약본에 불과, interface는 새로 type을 생성