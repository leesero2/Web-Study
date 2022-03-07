// JavaScript 에서 setInterval 함수는 기준 간격을 두고 주기적으로 이벤트를 발생 시키고 싶을 때 사용
//그리고 중지하고 싶을 때는 clearInterval 함수를 사용

//예를 들어 1초마다 특정 함수를 실행시키고 싶으면 아래와 같이 사용하면 됨.

var timer = setInterval(function(){
    특정함수();
}, 1000)

//clearInterval 함수의 매개변수는 setInterval 함수가 리턴해주는 값을 사용
//예로든 위의 반복을 중지하고 싶다면, 리턴받은 timer 값을 매개변수로 보내주면 됨.

clearInterval(timer);


//출처: https://aljjabaegi.tistory.com/423 [알짜배기 프로그래머]


