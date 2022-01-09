/** @format */

public class DateControl {
// Date control functions
// 첫만남 날짜 기록
public const firstMeet: Date = new Date("2021-12-24");
// 현재 시간 기록
public now: Date = new Date();

// 첫만남과, 현재 시간을 number type으로 바꿔 계산하기 편하게 만들어줌.
public const toNow: Number = this.now.getTime();
public const toFirst: Number = this.firstMeet.getTime();

// 만남 이후 D-Day 기록 계산 함수. 
const passedTime = function(NowTime: Number, FirstMeetTime:  Number):Number{
  let passedTimeFunctionResult: Number = this.NowTime- this.FirstMeetTime;
  return passedTimeFunctionResult;
}

public passedTimeResult: Number = this.passedTime(this.toNow, this.toFirst);

// Math.round 함수를 이용해서, 결과값을 반올림해준 뒤, 변수에 저장.
// 1000ms * 60second * 60minute * 24hour
public const passedDay: Number = Math.round(this.passedTimeResult / (1000 * 60 * 60 * 24)) + 1;

// console.log(passedDay);
// 저장한 값을 화면에 표시해줌,

const firstMeetingDay = firstYear + "." + firstMonth + "." + firstDate;

function CalculateDay(greetingDay) {
  let greetingDayResult = toFirst + this.greetingDay;
}

function firstMeetingFunction() {
  const firstYear = firstMeet.getFullYear();
  const firstMonth = firstMeet.getMonth() + 1;
  const firstDate = firstMeet.getDate();
  const firstMeetingDay = firstYear + "." + firstMonth + "." + firstDate;
}
const exampleValue = document.querySelector(".firstDays");
exampleValue.innerText = firstMeetingDay;
}
export default