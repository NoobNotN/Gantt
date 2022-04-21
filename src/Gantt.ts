import {Canvas} from "@antv/g";
import {Renderer} from "@antv/g-canvas";
import GanttUI from "Bean/UI/GanttUI";
import DataSet from "./Bean/DATA/DataSet";
import {O} from "./Interface/option";

export class Gantt{
    /**
     * 驱动数据集
     */
    public dataSet: object;
    /**
     * 容器
     */
    public readonly container: HTMLElement;
    /**
     * G 实例
     */
    private g: Canvas;
    /**
     * UI实例集
     */
    public ganttUI : GanttUI;

    constructor(container: string | HTMLElement, option: O) {
        // 全局状态
        window['noobnot_gantt'] = {
            option,
            store:{},
        };

        this.container = typeof container === 'string'
            ? document.getElementById(container)
            : container;

        this.dataSet = new DataSet(option);

        this.g = new Canvas({
            container : this.container,
            renderer: new Renderer({
                enableDirtyRectangleRendering: true,
            }),
        })

    }

    public render(){

        this.ganttUI = new GanttUI();
        this.g.appendChild(this.ganttUI)

    }

}