interface PhoneNumberDictionary {
    [phone: string]: {
      num: number;
    };
}
  
interface Contact {
    name: string;
    address: string;
    phones: PhoneNumberDictionary;
}
  
// 제한된 문자열의 집합
enum PhoneType {
    Home = 'home',
    Office = 'office',
    Studio = 'studio'
}

export { PhoneNumberDictionary, Contact, PhoneType }