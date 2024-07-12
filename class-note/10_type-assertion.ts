// 타입 단언
let a
a = 20
a = '20'
let b = a // 문자열로 끝났으므로 문자열로 생각할 수 있지만 any 타입임
let c = a as string // 타입을 추론 말고 직접 설정

// DOM API 조작
// HTMLDivElement | null로 추론, 바로 HTMLDivElement로 접근할 수 없음
// 무조건 HTMLDivElement로 단언 
let div = document.querySelector('div') as HTMLDivElement