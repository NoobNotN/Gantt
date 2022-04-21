export default class Base {

    protected readonly $store;
    protected readonly $option;

    constructor() {
        this.$store = window['noobnot_gantt'].store;
        this.$option = window['noobnot_gantt'].option;
    }

}