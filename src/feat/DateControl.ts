/** @format */

public class DateControl {
  constructor(private firstMeeting_Date: string) {

    private let DateControls: string[] = [
       firstMeeting_Date
    ];
  };

public PassedTime = function(FMTD: string): number {
  { 
    const dateTimeSetting: number = (1000 * 60 * 60* 24) + 1;   // dateTimeSetting: set times variable -> number(ms)
    const firstMeet: number= new Date(FMTD).getTime(); // firstMeet: set first meeting,
    const nowTime: number= new Date().getTime();  //  nowTime: set now time
  }
  return Math.round((this.nowTime - this.firstMeet) / this.dateTimeSetting);
}

// save passed time value
public const savePassedTime: number = this.PassedTime(this.firstMeeting_Date);
// const exampleValue: string = this.PassedTime("2021-12-24");



public FirstMeetingFunction = function(savePassedTime: Date): object {
  const firstYear: number = savePassedTime.getFullYear();
  const firstMonth: number = savePassedTime.getMonth() + 1;
  const firstDate: number= savePassedTime.getDate();
  const firstMeetingDay = firstYear + "." + firstMonth + "." + firstDate;

  // firstDateSet = Have firstMeeting Day's informations.
  const firstDateSet: any = [
    firstYear, 
    firstMonth, 
    firstDate, 
    firstMeetingDay
  ];
  return firstDateSet;
}

const firstMeetingFunctionEx: any[] = [ this.FirstMeetingFunction(this.savePassedTime];

function CalculateDay(greetingDay) {

  let greetingDayResult = toFirst + this.greetingDay;
}

const exampleValue = document.querySelector(".firstDays");
exampleValue.innerText = firstMeetingDay;
}
export default