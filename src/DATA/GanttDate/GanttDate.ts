import dayjs from 'dayjs';
import Base from "../Base/Base";

export default class GanttDate extends Base{

    public year: number = 0;
    public month: number = 0;
    public day: number = 0;

    constructor(date: Date) {
        super();
        if (date){

            this.day = dayjs(date).diff(dayjs(this.$option.today), 'days');

        }

    }
}