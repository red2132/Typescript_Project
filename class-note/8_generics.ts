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
