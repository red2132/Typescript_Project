// 함수의 파라미터와 리턴값의 타입 정의
function sum(a: number, b:number): number {
    return a + b
}

// sum(1,2,3,4,5) -> 인수 개수 체크

// 함수의 옵셔널 파라미터(?사용)
function log(a: string, b?: string) {

}

log('hello world')
log('hello', 'ts')