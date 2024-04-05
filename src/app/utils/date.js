import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import "dayjs/locale/ko";

function dateView(date) {
  dayjs.extend(utc);
  dayjs.locale("ko");

  return dayjs(date).utc().format("YYYY년 MM월 DD일");
}

export default dateView;
