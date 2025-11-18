import { LightningElement ,track} from 'lwc';

export default class SimpleCalculator extends LightningElement {

    @track currentResult
    @track previousResult=[]
    @track showPreviousResult=false

    FirstNumber;
    SecondNumber;
     
    numberChangeHandler(event){
        const inputBoxName = event.target.name;

        if(inputBoxName==="FirstNumber"){
            this.FirstNumber =event.target.value;
        }else if(inputBoxName==="SecondNumber"){
            this.SecondNumber =event.target.value;
        }
    }

    additionHandler(){
        const firstN= parseInt(this.FirstNumber);
        const secondN=parseInt(this.SecondNumber);

        this.currentResult= `Result for ${firstN}+${secondN} is>> ${firstN+secondN}`;
        this.previousResult.push(this.currentResult);


    }
    SubtractionHandler(){
        const firstN= parseInt(this.FirstNumber);
        const secondN=parseInt(this.SecondNumber);

        this.currentResult= `Result for ${firstN}-${secondN} is>> ${firstN-secondN}`;
        this.previousResult.push(this.currentResult);


    }
    MultiplicationHandler(){
        const firstN= parseInt(this.FirstNumber);
        const secondN=parseInt(this.SecondNumber);

        this.currentResult= `Result for ${firstN}*${secondN} is>> ${firstN*secondN}`;
        this.previousResult.push(this.currentResult);


    }
    DivisionHandler(){
        const firstN= parseInt(this.FirstNumber);
        const secondN=parseInt(this.SecondNumber);

        this.currentResult= `Result for ${firstN}/${secondN} is>> ${firstN/secondN}`;
        this.previousResult.push(this.currentResult);


    }
    resultStoreHandler(event){
        this.showPreviousResult=event.target.checked;

    }

}