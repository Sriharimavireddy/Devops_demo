import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
    constructor(){
        super()
        console.log("Child Constructor method  called")
    }
    connectedCallback(){
        console.log("Child connected call back  called")
    }
    renderedCallback(){
        console.log("Child Rendered call back called")
    }
}