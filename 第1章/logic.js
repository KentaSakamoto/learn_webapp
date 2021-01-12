// var age = 16;
// var result = null;
// if (age >= 20) {
//     result = '成年';
// } else {
//     result = '未成年';
// }
// document.write(result);

// var age = 65;
// var isMenber = true;
// var result = null;
// if ( age >= 60 && isMenber ) {
//     result = 'シニア会員割引の対象です';
// } else {
//     result = 'シニア会員割引の対象ではありません';
// }
// document.write(result);

var age = 3;
var isMenber = false;
var result = null;
if (age <= 15) {
    result = 800;
} else if(age >= 16 && isMenber) {
    result = 1000;
} else {
    result = 1800;
}
document.write(result);