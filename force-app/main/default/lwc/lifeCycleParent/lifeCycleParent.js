import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    constructor(){
        super()
        console.log("Parent Constructor method  called")
    }
    connectedCallback(){
        console.log("Parent connected call back  called")
    }
    renderedCallback(){
        console.log("Parent Rendered call back called")
    }
}