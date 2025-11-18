import { LightningElement ,api} from 'lwc';

export default class P2cSliderComponent extends LightningElement {
    val=0
    barchnage(event){
        this.val = event.target.value

    }

    @api ResetHnadler(){
       this.val=0 
    }
}