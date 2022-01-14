/** @format */

class DateCalculator {
  constructor(private firstMeeting_Date: string) {
    firstMeeting_Date  // 유저로부터 받아온 첫날 데이트값 저장.
  }

  CalculatePassedTime = function (FMTD: string): number {
    // 첫날부터 현재까지 얼마나 지났는지 계산해주는 함수
    {
      const dateTimeSetting: number = 1000 * 60 * 60 * 24 + 1; // set times variable -> number(ms)
      const firstMeet: number = new Date(FMTD).getTime(); // set first meeting,
      const nowTime: number = new Date().getTime(); // set now time
    }
    return Math.round((this.nowTime - this.firstMeet) / this.dateTimeSetting); // 계산된 값을 반환
  };

  PrintFirstMeeting = function (savePassedTime: Date): string {
    // 첫 만남일 00 00 00 형식의 string 값으로 반환
    const firstYear: number = savePassedTime.getFullYear();
    const firstMonth: number = savePassedTime.getMonth() + 1;
    const firstDate: number = savePassedTime.getDate();
    const firstMeetingDay: string =
      firstYear + "." + firstMonth + "." + firstDate;

    return firstMeetingDay;
  };
}

export default DateCalculator;
