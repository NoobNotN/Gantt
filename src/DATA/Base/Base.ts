import store from "./Store";
import option from "./Option";


export default class Base {

    protected readonly $store;
    protected readonly $option;

    constructor() {
        this.$store = store;
        this.$option = option;
    }

}