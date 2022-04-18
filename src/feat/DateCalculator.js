"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
class DateCalculator {
    constructor(firstMeeting_Date) {
        this.firstMeeting_Date = firstMeeting_Date;
        this.CalculatePassedTime = function (FMTD) {
            // 첫날부터 현재까지 얼마나 지났는지 계산해주는 함수
            {
                const dateTimeSetting = 1000 * 60 * 60 * 24 + 1; // set times variable -> number(ms)
                const firstMeet = new Date(FMTD).getTime(); // set first meeting,
                const nowTime = new Date().getTime(); // set now time
            }
            return Math.round((this.nowTime - this.firstMeet) / this.dateTimeSetting); // 계산된 값을 반환
        };
        this.PrintFirstMeeting = function (savePassedTime) {
            // 첫 만남일 00 00 00 형식의 string 값으로 반환
            const firstYear = savePassedTime.getFullYear();
            const firstMonth = savePassedTime.getMonth() + 1;
            const firstDate = savePassedTime.getDate();
            const firstMeetingDay = firstYear + "." + firstMonth + "." + firstDate;
            return firstMeetingDay;
        };
        firstMeeting_Date; // 유저로부터 받아온 첫날 데이트값 저장.
    }
}
exports.default = DateCalculator;
//# sourceMappingURL=DateCalculator.js.map