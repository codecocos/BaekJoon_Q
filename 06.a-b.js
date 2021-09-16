/*문제
두 정수 A와 B를 입력받은 다음, A-B를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

출력
첫째 줄에 A-B를 출력한다. */

/////////////////////////////////////////////////정답//////////

let fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().split(' ');

let a = parseInt(input[0]);
let b = parseInt(input[1]);

console.log(a - b);




/////////////////////////////////////////////////정리사항//////////////////

var c = 1;
var d = '1';

console.log(typeof (c)); //number
console.log(typeof (d)); //string

//숫자를 문자열로 변환
var e = c.toString();
console.log(typeof (e));//string

//문자열를 숫자로 변환
var f = parseInt(d);
console.log(typeof (f));//number
