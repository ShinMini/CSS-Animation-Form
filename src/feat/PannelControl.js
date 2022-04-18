"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
class PannelControl {
    DotCennectContent() {
        // 도트 클래스값과 아이디값과 컨텐츠별 아이디 값을 연결
        // display=none;을 적용해, content 보였다 안보였다,
        // 혹은 animation 이용해, content 넘어가는 모션 구현,
        console.log("DotCennectContent function runs");
    }
    DotChange() {
        // 시간에 따라 도트값 바뀌는 함수.
        console.log("DotChange function runs");
    }
    DotMove() {
        //    let dot1 = 도트 클래스 속성 값 저장;
        //    i 태그 값 = 비어있는 도트 , 채워진 도트
        //   도트_클래스.기본상태로 변경,
        //       시간에 따라 도트값 자동으로 채워진 속성으로 바뀌는 함수()
        //  도트값이 바뀜에 따라 컨텐츠 변화, 도트 id값을 부여한뒤, id에 따른 content지정
        console.log("DotMove function runs");
    }
}
exports.default = { PannelControl };
//# sourceMappingURL=PannelControl.js.map