//setTimeout()이란
//일정 시간 후에 특정 코드, 함수를 의도적으로 지연한 뒤 실행하고 싶을 때 사용하는 함수로 setTimeout()을 사용합니다. 
//앞에서도 말했지만 자바스크립트 함수 중에서도 특히 자주 사용되는 함수 중 하나입니다. 
//먼저 간단한 문법, 사용방법은 아래와 같습니다.

setTimeout(function() { 코드부분 }, delay);

//위 함수는 보통 두 개의 인자를 설정하여 사용합니다.

//i. 호출될 콜백함수
//ii. 지연시간(delay time)

//setTimeout() 함수의 내부에 위치한 코드 function() { // Code here }는 콜백함수로 지연시간 뒤에 실행될 코드를 설정합니다. 
//지연시간은 밀리세컨드 단위로 설정해야하며 예를들어 지연시간 1000은 1초, 10000은 10초를 의미합니다. 
//만약 3초 뒤에 실행되야 한다면 아래와 같이 설정합니다.

setTimeout(function() {
    console.log('Works!');
  }, 3000);

  //3초후 함수가 실행됨

//예제

//아래는 간단한 setTimeout() 예제로 3초 후 현재 페이지 url 주소인 'http://webisfree.com'을 알림창으로 보여주려합니다.
setTimeout(function() {
  alert('http://webisfree.com');
}, 3000);

//3초 뒤에 경고창으로 해당문구를 출력함

//아래 예제는 setTimeout() 함수를 myTimer에 담은 후 이를 clearTimeout()으로 해제, 삭제하는 예제
var myTimer = setTimeout(function() {
    // Timer codes
  }, 3000);