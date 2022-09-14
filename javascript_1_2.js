//文字の連結
console.log("3"+"5");     //35が出力される
console.log(3+5);       //8が出力される

//変数の定義
let name = "にんじゃわんこ";

//定数の定義
const name = "にんじゃわんこ";

//テンプレートリテラル
const name = "にんじゃわんこ";
console.log(`こんにちは、${name}さん`);

//等価演算子
a==b    //aとbが等しい
a!=b    //aとbが異なる

//厳密等価演算子
a===b   //aとbが厳密に等しい
a!==b   //aとbが厳密に異なる

//and / or
&&    //かつ
||   //または

//if文
const number = 7;

if(number>10){
    console.log("numberは10より大きいです");
}else if(number>5){
    console.log("numberは5より大きいです");
}else{
    console.log("numberは5以下です");
}
//switch文
const n = 4;

switch (n) {
  case 1:
    console.log("大吉です");
    break;

  case 2:
    console.log("吉です");
    break;

  case 3:
    console.log("小吉です");
    break;

  default:
    console.log("凶です");
    break;
}
//while文
let number = 1;

while(number<=100){
  console.log(number);
  number+=1;
}
//for文
for(let number=1; number<=100; number++){
  console.log(number);
}
//オブジェクト
const item ={name: "手裏剣", price: 300}
console.log(item.name);
