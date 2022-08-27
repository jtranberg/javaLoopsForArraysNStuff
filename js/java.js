let num = 8;
console.log(num);

num = 2;
console.log(num * 20);

let string = "Hello world!";
console.log(string);

let num1 = 3;
console.log(num1 / 7);

console.log(3+7, "hello world");

let rating = 2;
if (rating === 3) {
    console.log("you are a super star")
}
else if (rating === 2) {
    console.log("meets expectations");
}
else if (rating === 1) {
    console.log("needs work");
}


let password = "kittens";
if(password.length >=6){
    if(password.indexOf(' ')=== -1) {
  console.log('valid password');
}
else {
    console.log('password long enough,but can not have spaces');
}
}
else {
    console.log("password must be longer");
}

let loggedInUser;
if(!loggedInUser) {
    console.log('get out of here');
}
let flavor = 'cherry';
if (flavor !== "grape" && flavor !== "cherry") {
    console.log("we dont have that flavor");
}
else {
    console.log('we have that flavor')
}

let day = 3;
switch (day) {
        case 1:
        console.log("mon");
        break;
        case 2:
        console.log("tues");
        break;
        case 3:
        console.log("wed");
        break;
        case 4:
        console.log("thurs");
        break;
        case 5:
        console.log("fri");
        break;
        case 6:
        console.log("sat");
        break;
        case 7:
        console.log("sun");

}
let emoji = 'heart';
switch (emoji) {
    case 'sad face':
    case 'happy face':
    console.log('yellow');
    break;
    case 'eggplant':
    console.log ('purple');
    break;
    case 'heart':
    case 'lips':
    console.log('red');
    break;
}

for (let i = 1; i <= 10; i++) {
    console.log('great', i); // i makes console.log visible 10 times
}

for (let i = 1; i <= 10; i++) {
      console.log('you win');
}for(let num = 1; num <= 20; num++){
    console.log(`${num}*${num} = ${num*num}`);
}
console.log('loop complete');

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
while (guess !== target) {
    console.log(guess);
    guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log('you win!');

let subreds = ['soc', 'pop', 'crap', 'stud'];
for (let i = 0; i < subreds.length; i++) {
 console.log(subreds[i]);
}
for (let sub of subreds) {
    console.log(sub);
}
const words1 = ['heh', 'you', 'guy', 'car'];
const words2 = ['man', 'guys', 'cave', 'burator'];

for (let i = 0; i < words1.length; i++) {
    console.log(`${words1[i]}${words2[i]}`);
}
