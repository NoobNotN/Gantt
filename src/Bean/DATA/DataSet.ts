import {O} from "Interface/option";
import Task from "./Task/Task";

export default class DataSet{
    /**
     * 任务数组
     */
    public static taskList: Array<Task>;
    /**
     * 用户原始数据集
     */
    private static userOption: any;


    constructor(option: O) {

        DataSet.userOption = option;

        DataSet.taskList = DataSet.getTaskList();

    }

    /**
     * 格式化任务数组
     */
    private static getTaskList() {

        const { data } = this.userOption;

        const taskList = data.map(
            (sourceTask:object) => new Task(sourceTask)
        )


        return [];
    }

}