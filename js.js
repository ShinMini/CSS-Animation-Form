/** @format */
// 1910년 1월 1일 00:00일을 기준으로 now 객체의 시간까지 시간이 얼마나 흘렀는지를 밀리초로 표시해준다.

const firstMeet = new Date("2021-12-24");
const now = new Date();

// 기념일 저장
const toNow = now.getTime();
const toFirst = firstMeet.getTime();
const passedTime = toNow - toFirst;

// Math.round 함수를 이용해서, 결과값을 반올림해준 뒤, 변수에 저장.
// 1000ms * 60second * 60minute * 24hour
const passedDay = Math.round(passedTime / (100 * 60 * 60 * 24));

// console.log(passedDay);
// 저장한 값을 화면에 표시해줌,

document.querySelector("firstMeet");
console.log(firstMeetDiv);
