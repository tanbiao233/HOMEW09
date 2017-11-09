// var abcs = prompt('请输入你的银行卡密码，进入游戏', '123456');

// console.log(abcs);
// var a = parseInt(prompt('请输入游戏验证码：'));
// var b = parseInt(prompt('请输入游戏体验码：'));
// alert(a + b);
// console.log()

var a = parseFloat(prompt("请输入要计算的数："));
var b = a % 5;
var c = a % 6;
if (b == 0 && c == 0) {
    alert("此数可以被5和6整除")
} else if (b == 0 && c != 0) {
    alert('此数能被5整除但不能被6整除')
} else if (b !== 0 && c == 0) {
    alert('此数可以被6整除但不能被5整除')
} else if (b !== 0 && c !== 0) {
    alert('此数既不能被5整除，也不能被6整除')
}