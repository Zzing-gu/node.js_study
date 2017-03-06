//모둘을 추출합니다.
var fs= require('fs');

//모듈을 사용합니다.
// var text = fs.readFileSync('textfile.txt', 'utf8');
// console.log(text);

//readFile() 메서드를 사용
// fs.readFile('textfile.txt', 'utf8', function(error, data) {
//   console.log(data);
// });

//변수를 선언합니다.
var data = 'Hello World .. !';

//모듈을 사용합니다.
fs.writeFile('TextFileOtherWrite.txt', data, 'utf8', function (error) {
    console.log('WRITE FILE ASYNC COMPLETE');
});

fs.writeFileSync('TextFileOtherWriteSync.txt', data, 'utf8');
console.log('WRITE FILE SYNC COMPLETE');
