// 파라미터 타입 정의
class Person2 {
    // 접근 범위 정의 가능
    private name: string
    public age: number
    readonly log: string
    
    // 여기서도 타입 정의 가능
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}