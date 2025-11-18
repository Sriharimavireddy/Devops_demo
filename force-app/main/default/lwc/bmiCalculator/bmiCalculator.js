import { LightningElement,track } from 'lwc';

export default class BmiCalculator extends LightningElement {

   weight;
   height;
    BMI;

    
    WeightChanged(event){
        this.weight=parseFloat(event.target.value);

    }
    HeightChanged(event){
        this.height = parseFloat(event.target.value);

    }
    BMIcheck(){
        this.BMI =  this.weight/(this.height*this.height);
    }

    get BMIvalue(){
        if(this.BMI== undefined){
            return '';
        }else{
        return `Your BMI is: ${this.BMI}`;
    }
}
}