// 기본
function logText(text: string) {
    console.log(text)
    return text
}
function logNumber(number: number){
    console.log(number)
    return number
}
logText('하이')
logNumber(10)
// 함수는 비슷한데 타입에 따라 함수를 나눠야 함...

// 유니온의 경우
function logText2(text: string | number) {
    // 파라미터는 다양하게 받을 수 있지만 공통되는 함수밖에 못씀...
    return text
}

// 제네릭 사용
function logText3<T>(text: T): T {
    console.log(text)
    return text   
}

// 호출할 때 구체적인 타입 선언 가능
logText3<string>('하이')

// 인터페이스에 제네릭 선언하는 법
interface Dropdown {
    value: string
    selected: boolean
}

const obj: Dropdown = {value: 'abc', selected: false}

interface Dropdown2<T> {
    value: T
    selected: boolean
}
const obj2: Dropdown2<string> = {value: 'abc', selected: false}
const obj3: Dropdown2<number> = {value: 11, selected: false}

// 제네릭의 타입 제한(배열로 타입 제한)
function logTextLength<T>(text: T[]) : T[] {
    text.forEach(function(text) {
        console.log(text)
    })
    return text
}

logTextLength<string>(['hi', 'abc'])

// 제네릭 타입 제한2 - 정의된 타입 이용하기
interface LengthType {
    length: number
}

function logTextLength2<T extends LengthType>(text: T): T {
    // Length 타입을 상속받아 length 정의
    text.length
    return text
}

// 제네릭 타입 제한3 - key of
interface ShoppingItem {
    name: string
    price: number
    stock: number
}
// ShoppingItem에 있는 키값만 들어갈 수 있음
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption
}

getShoppingItemOption("name")
getShoppingItemOption("price")