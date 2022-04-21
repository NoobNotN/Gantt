export default class Base {

    private readonly $store;
    private readonly $option;

    constructor() {
        this.$store = window['noobnot_gantt'].store;
        this.$option = window['noobnot_gantt'].option;
    }

}