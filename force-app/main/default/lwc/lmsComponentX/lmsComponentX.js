import { LightningElement,wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c"
import {APPLICATION_SCOPE, publish, subscribe,unsubscribe,MessageContext} from 'lightning/messageService'
export default class LmsComponentX extends LightningElement {
   
    inputValue

    @wire(MessageContext)
    context;

    OnTextChangeHandler(event){
        this.inputValue=event.target.value
    }

    onSubmitHandler(){
        const message={
            recordData:{
                value:this.inputValue
            }
        }
        //publish(MessageContext,MessageChannel,message)
        publish(this.context,SAMPLEMC,message)

    }
}