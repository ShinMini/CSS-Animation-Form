/** @format */

public class DateControl {
  constructor(private FirstMeeTDate: string) {

    private let DateControls: string[] = [
       FirstMeeTDate
    ];
  };

public PassedTime = function(FMTD: string): number {
  { // dateTimeSetting: set times variable -> number(ms), firstMeet: set first meeting, nowTime: set now time
    const dateTimeSetting: number = (1000 * 60 * 60* 24) + 1;
    const firstMeet: number= new Date(FMTD).getTime();
    const nowTime: number= new Date().getTime();
  }
  return Math.round((this.nowTime - this.firstMeet) / this.dateTimeSetting);
}

// save passed time value
public const savePassedTime: number = this.PassedTime(this.FirstMeeTDate);
// const exampleValue: number = this.PassedTime("21.12.24");



public FirstMeetingFunction = function(savePassedTime: Date): object {
  const firstYear: number = savePassedTime.getFullYear();
  const firstMonth: number = savePassedTime.getMonth() + 1;
  const firstDate: number= savePassedTime.getDate();
  const firstMeetingDay = firstYear + "." + firstMonth + "." + firstDate;

  const firstDateSet: any = [
    firstYear, 
    firstMonth, 
    firstDate, 
    firstMeetingDay
  ];
  return firstDateSet;
}

const firstMeetingFunctionEx: any[] = [ this.FirstMeetingFunction(this.savePassedTime)];

function CalculateDay(greetingDay) {

  let greetingDayResult = toFirst + this.greetingDay;
}

const exampleValue = document.querySelector(".firstDays");
exampleValue.innerText = firstMeetingDay;
}
export default