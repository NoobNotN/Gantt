import {option} from "./Store";


export default class Base {

    protected readonly $store;
    protected readonly $option;

    constructor() {
        this.$store = option;
        this.$option = option;
    }

}