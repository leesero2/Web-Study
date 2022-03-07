Math.random()
//Javascript에서 난수를 생성하기 위해서는, Math.random() 함수를 사용합니다.
//이 함수는 0~1(1은 미포함) 구간에서 부동소수점의 난수를 생성합니다.

//그렇다면, 정수인 난수를 생성하려면 어떻게 해야 할까요?

//Math.random() 함수와 Math.floor() 함수를 함께 사용합니다.

//Math.floor() 함수는 소수점 1번째 자리를 버림하여 정수를 리턴하는 함수입니다.

//[Javascript] 반올림(round), 올림(ceil), 내림(floor) - 소수점, 음수,자리수 지정

예제
// (1) 0 <= random < 1
const rand1 = Math.random();
document.write('(1) ' + rand1 + '<br>');

//결과 - 0.7657926440585823

// (2) 0
const rand2 = Math.floor(Math.random());
document.write('(2) : ' + rand2 + '<br>');

//결과 - 0

// (3) 0 <= random <= 9
const rand_0_9 = Math.floor(Math.random() * 10);
document.write('(3) : ' + rand_0_9 + '<br>');

//결과 - 9

// (4) 0 <= random <= 10
const rand_0_10 = Math.floor(Math.random() * 11);
document.write('(4) : ' + rand_0_10 + '<br>');

//결과 - 0

// (5) 0 <= random <= 99
const rand_0_99 = Math.floor(Math.random() * 100);
document.write('(5) : ' + rand_0_99 + '<br>');

//결과 - 14

// (6) 0 <= random <= 100
const rand_0_100 = Math.floor(Math.random() * 101);
document.write('(6) : ' + rand_0_100 + '<br>');

//결과 - 65

// (7) 1 <= random <= 10
const rand_1_10 = Math.floor(Math.random() * 10) + 1;
document.write('(7) : ' + rand_1_10 + '<br>');

//결과 - 10

// (8) 2 <= random <= 5
const rand_2_5 = Math.floor(Math.random() * 4) + 2;
document.write('(8) : ' + rand_2_5 + '<br>');

//결과 - 2


난수 생성 함수 만들기 (범위 지정)
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  document.writeln(rand(1, 3));
  document.writeln(rand(77, 88));

  //결과 1 88



출처: https://hianna.tistory.com/454 [어제 오늘 내일]