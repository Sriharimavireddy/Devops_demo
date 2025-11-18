import { LightningElement,track } from 'lwc';

export default class HelloWoorld extends LightningElement {

    name="Sri Hari Mavireddy"
    address={
        city:"texas",
        Country:"us"
    }

    numb1
    numb2

    onNameChangeHandler(event){
        this.name=event.target.value
    }

    oncityChangeHandler(event){
        this.address={...this.address,"city":event.target.value} 

    }
    onNumber1ChangeHandler(event){
        this.numb1=event.target.value
      

    }
    onNumber2ChangeHandler(event){
       
        this.numb2=event.target.value

    }

    get sumOftwoNums(){
        return this.numb1 * this.numb2;
    }
}