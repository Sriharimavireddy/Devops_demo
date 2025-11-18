import { LightningElement } from 'lwc';

export default class SlotChildComponent extends LightningElement {
    slotChangeHandler(){
        const footerElem = this.template.querySelector('.slds-card__footer')
        if(footerElem){
            footerElem.classList.remove('.slds-hide')
        }
    }
}