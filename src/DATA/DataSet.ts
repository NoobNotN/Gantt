import {O} from "Interface/option";
import Base from "./Base/Base";
import Task from "./Task/Task";

export default class DataSet extends Base{
    /**
     * 任务数组
     */
    public taskList: Array<Task>;
    /**
     * 用户原始数据集
     */
    private userOption: any;

    constructor(option: O) {
        super();

        this.userOption = option;
        const { data } = option;

        // 格式化任务数组
        this.taskList = data.map((sourceTask:object) => new Task(sourceTask))

    }


}