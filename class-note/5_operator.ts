function logMessage(value: string) {
    console.log(value)
}

logMessage('hello')

// union type
function logMessage2(value: string | number) {
    if(typeof value === 'number') {
        value.toLocaleString()
    }
    if(typeof value === 'string') {
        value.toLocaleString()
    }
    throw new TypeError('value must be string or number')
}

logMessage2('hello')
logMessage2(10)
/////////////////////////////////////////////////////////
interface Developer {
    name: string,
    skill: string
}

interface Person {
    name: string,
    age: number
}

function askSomeone(someone: Developer | Person) {
    someone.name // 공통 속성만 접근 가능(확실하게 검증할 수 있는 속성만)
}
askSomeone({ name: '디벨로퍼', skill: '웹 개발' })
askSomeone({ name: '디벨로퍼', age: 100 })

// intersection type
function askSomeone2(someone: Developer & Person) {
    // Developer와 Person이 가진 모든 속성을 이용가능
    someone.name
    someone.skill
    someone.age
}

// 모든 속성이 다 들어가야 함
askSomeone2({ name: '디벨로퍼', skill: '웹 개발', age: 100 })