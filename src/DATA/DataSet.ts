import {O} from "Interface/option";
import Base from "./Base/Base";
import Task from "./Task/Task";

export default class DataSet extends Base{
    /**
     * 任务数组
     */
    public taskList: Array<Task>;

    constructor(option: O) {
        super();

        this.$option.init(option);

        const { data } = option;

        // 格式化任务数组
        this.taskList = data.map((sourceTask:object) => new Task(sourceTask))
    }


}