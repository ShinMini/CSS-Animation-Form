/** @format */

public class DateControl {
  constructor(private FirstMeeTDate: string) {
    private let DateControls {
      private FMDate: string = FirstMeeTDate,
    }
  }

/* firstMeet: save first meeting day(21.12.24),now: save now time value => in Date type */
// {toNow: save now date time , toFirst: save first meeting date } => number type
// PassedTime: calculate d-day time function 
public PassedTime = function(FirstMeetTime: string): number {
  {// dateTimeSetting: set times variable -> number(ms), firstMeet: set first meeting, nowTime: set now time
    const dateTimeSetting: number = (1000 * 60 * 60* 24) + 1;
    const firstMeet: number= new Date(FirstMeetTime).getTime();
    const nowTime: number= new Date().getTime();
  }

  return Math.round((this.nowTime - this.firstMeet) / this.dateTimeSetting);
}
console.log(PassedTime("21.12.24"));

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