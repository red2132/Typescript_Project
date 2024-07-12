// 타입 추론 기본1
let a = 10

// 디폴트 값을 선언하면 타입을 추론해 같은 타입으로 지정
function getB(b = 10) {
    let c= 'hi'
    // 문자열과 합쳐졌으므로 문자열로 추론
    return b + c
}

// 타입 추론 기본2
interface Dropdown<T> {
    value: T
    title: string
}

// 제네릭을 이용한 속성의 타입 추론
let shoppingItem: Dropdown<string> = {
    value: 'abc',
    title: 'hello'
}

// 타입 추론 기본2
interface Dropdown2<T> {
    value: T
    title: string
}

interface DetailedDropdown<K> extends Dropdown2<K> {
    description: string
    tag: K
}

// 상속 받은 속성에 제네릭을 이용해 타입 세팅
let shoppingItem2: DetailedDropdown<string> = {
    value: 'abc',
    title: 'hello',
    description: 'cde',
    tag: 'abc'
}

// Best Common Type
// 배열의 교집합이 될 수 있도록 타입 추론
let arr = [1, 2, true]