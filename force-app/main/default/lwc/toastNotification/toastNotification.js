import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'

export default class ToastNotification extends LightningElement {

    onToastHandler(){
       const event = new ShowToastEvent({
            title : 'Success Meaagse',
            message : 'You have shown succes message',
            variant : 'success'
        })
        this.dispatchEvent(event)
    }
    onToastError(){
        const event =new ShowToastEvent({
            title : 'Error Message',
            message : 'You have displayed error message',
            variant : 'error'
        })
        this.dispatchEvent(event)

    }

    onToastInfo(){
    const event = new ShowToastEvent({
        title : 'Info message',
        message : 'you have shown information message',
        variant : 'info'
    })
    this.dispatchEvent(event)
}
}