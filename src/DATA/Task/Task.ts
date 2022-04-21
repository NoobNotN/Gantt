import { ObjectBase } from "Interface/interface";
import Base from "../Base";

export default class Task extends Base{
    /**
     * 格式化后的开始相对值
     */
    private start: number;
    /**
     * 格式化后的持续时间相对值
     */
    private duration: number;
    /**
     * 源数据
     */
    public sourceData: ObjectBase;
    /**
     * @param data: 任务源数据
     */
    constructor(data: object) {
        super();
        console.log(this.$store);

    }
}