
/** 사용자  */
class User { 
  /** 사용자 이름 */
  name: string = "";
  /** 사용자 나이 */
  age: number = 0; 

  /**
   * 생성자입니다. 
   * @param name 이름 
   * @param age 나이 
   */
  constructor(name?: string, age?: number) {
    if(name != undefined) {
      this.name = name;
    }
    if(age != undefined) {
      this.age = age;
    }
  }
}///~

export default User; 