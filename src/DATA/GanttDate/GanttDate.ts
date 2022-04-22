import dayjs from 'dayjs';
import Base from "../Base/Base";

export default class GanttDate extends Base{

    public year: number = 0;
    public month: number = 0;
    public day: number = 0;

    constructor(date: Date) {
        super();
        if (date){
            // 格式化相对时间
            const getDate = (key: any) => dayjs(date).diff(dayjs(this.$option.today), key);
            [this.year,this.month,this.day] = ['year','month','day'].map((key:string)=>getDate(key));

            // 更新最早最晚时间
            if (!dayjs(date).isAfter(this.$option.begin)) this.$option.begin = date;
            if (!dayjs(date).isBefore(this.$option.end)) this.$option.end = date;

        }
    }
}