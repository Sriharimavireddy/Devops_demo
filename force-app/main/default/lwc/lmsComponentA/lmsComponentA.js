import { LightningElement,wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c"
import { unsubscribe,subscribe,MessageContext, APPLICATION_SCOPE } from 'lightning/messageService';
export default class LmsComponentA extends LightningElement {

    receivedMessage
    @wire(MessageContext)
    context;

    connectedCallback(){
    this.subscribeHandler()

    }

    subscribeHandler(){
     this.SubscribedMessage=subscribe(this.context,SAMPLEMC,(message)=>{this.handleMessage(message)},{scope:APPLICATION_SCOPE})
    }
    handleMessage(message){
        this.receivedMessage=message.recordData.value ? message.recordData.value:"No message has been published"
    }
    unsubscribeHandler(){
        unsubscribe(this.SubscribedMessage)
            this.SubscribedMessage=null
            this.receivedMessage="You have been unsubscribed"
        

    }
    
    
}