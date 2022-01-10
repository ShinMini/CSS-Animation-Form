/** @format */

public class DateControl {

/* firstMeet: save first meeting day(21.12.24),now: save now time value => in Date type */
// {toNow: save now date time , toFirst: save first meeting date } => number type
// PassedTime: calculate d-day time function 
public PassedTime = function(FirstMeetTime: number): number {
  {
    const firstMeet: number= new Date(FirstMeetTime).getTime();
    const NowTime: number= new Date().getTime();
    const dateTimeSetting: number = (1000 * 60 * 60* 24) + 1;
  }

  return this.NowTime - this.firstMeet / this.dateTimeSetting;
}
"2021-12-24"
public const passedTimeResult: number = this.PassedTime(this.toNow, this.toFirst);

// Math.round 함수를 이용해서, 결과값을 반올림해준 뒤, 변수에 저장.
// 1000ms * 60second * 60minute * 24hour

PassedDay = (x: number, y: number): number => {
  return Math.round(x / y);
}

public passed = this.PassedDay(this.passedTimeResult, this.dateTimeSetting);
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