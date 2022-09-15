//関数
const greet = function() {
  console.log("こんにちは！");
};
greet();         

//アロー関数
const greet = ()=>{
  console.log("こんにちは！");
};
greet();

//クラス
class Animal {
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }
}
const animal = new Animal("モカ",8);

console.log(`名前: ${animal.name}`);
console.log(`年齢: ${animal.age}`);

//クラス(メソッドを含む)
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //greetメソッド
  greet() {
    console.log("こんにちは");
  }

  //infoメソッド
  info() {
    this.greet();    
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
  }
}

const animal = new Animal("レオ", 3);
animal.info();

//クラスの継承
class Dog extends Animal {
}

//コンストラクタのオーバーライド
class Dog extends Animal {
  constructor(name, age, breed){
      super(name, age);
      this.breed = breed;
  }