// 타입 가드
interface Developer {
    name: string
    skill: string
}

interface Person {
    name: string
    age: number
}

function introduce(): Developer | Person {
    return {
        name: 'Tony',
        age: 33,
        skill: 'Irob Making'
    }
}

let tony = introduce() // 공통 속성인 name에만 접근할 수 있음

if((tony as Developer).skill) { // tony의 타입을 Developer로 단언
    console.log((tony as Developer).skill) // skill에 접근 가능
}
// 가독성이 안 좋아짐... 
//-> 타입 가드 사용
function isDeveloper(target: Developer | Person): target is Developer {
    return (target as Developer).skill !== undefined
}

// 타입가드를 통해 각 타입의 속성에 접근 가능!
if(isDeveloper(tony)) {
    tony.skill
    tony.name
} else {
    tony.age
    tony.name
}

