/*문제
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

출력
첫째 줄에 A+B를 출력한다.*/




//파일시스템에 접근하는 모듈
var fs = require('fs');
//동기처리(파일을 꼭 읽고 와서 그 후에 실행해야 하는 경우)
//  "/dev/stdin" : 표준입력장치, 콘솔키보드 드라이버에서 값을 읽어와 입력을 받아 처리 할 수 있게 해준다.
//toString : 문자타입으로 변환
//split('구분이되는 문자열') : 하나의 텍스트를 기준이 되는 텍스트(콤마 등)로 분리하여 여러개의 값을 가진 배열로 변환 후 반환.
//fs.readFileSync('/dev/stdin'): 반환값은 문자열이 아닌 Buffer객체 이므로 문자열로 반환한 것.
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
//parseInt():문자열을 인자로 받으면 해당 문자열을 숫자로 바꿈. 
//문자열이 숫자가 아닌 경우에, 문자열이 숫자로 시작하는 경우(1000원 등) 숫자가 끝날 때 까지만 숫자를 인식하여 반환.
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a + b);


//아래 정답
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
// let a = parseInt(input[0]);
// let b = parseInt(input[1]);
// console.log(a + b);


/*
fs 모듈 : FileSystem의 약자로 파일 처리와 관련된 모듈

readFile()

fs.readFile(filename, [options], callback)
-filename의 파일을 [options]의 방식으로 읽은 후 callback으로 전달된 함수를 호출한다. (비동기적)


readFileSync()

fs.readFileSync(filename, [options])
-filename의 파일을 [options]의 방식으로 읽은 후 문자열을 반환한다. (동기적)
 */

