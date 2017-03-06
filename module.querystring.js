//모듈을 추출합니다.
var url = require('url');
//모듈을 추출합니다.
var querystring = require('querystring');

//모듈을 사용합니다.
// 두번째 인자로 true를 전달하면 query 가 객체로 반환된다.
var parsedObject = url.parse('http://www.hanbit.co.kr/store/books/look.php?p_code=B4250257160');
console.log(querystring.parse(parsedObject.query));
