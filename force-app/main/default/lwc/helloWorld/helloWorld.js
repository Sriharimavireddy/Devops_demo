import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {

    name="Sri Hari Mavireddy"
    isVisible=false

    ceoList=[
        {
            ceoName : "Elonmusk",
            companyName : "Tesla"
        },
        {
            ceoName : "Tata",
            companyName : "TCS"
        },
        {
            ceoName : "Ravi",
            companyName : "Cognizant"
        }

    ]

    welcomeMsgHandler(event){
        this.isVisible = true

    }
}