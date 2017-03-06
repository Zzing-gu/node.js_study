//모듈을 추출합니다.
var util = require('util');

//모듈을 사용합니다.
var data = util.format('%d + %d = %d', 52, 273, 52+273);
//파라미터로 입력한 문자열을 조합해 리턴합니다.
console.log(data);
