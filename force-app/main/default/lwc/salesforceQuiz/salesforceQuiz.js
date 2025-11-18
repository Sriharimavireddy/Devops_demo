import { LightningElement } from 'lwc';

export default class SalesforceQuiz extends LightningElement {

    selected={} //To stre answers selected
    isSubmited=false

    questionsList=[
        {
            id : "Q-1",
            Question : "Which certification is good for Freshers",
            Answers :{
                a : "PD1",
                b : "Admin",
                c : "App Builder"
            },
            cAnswer : "b"
        },
        {
            id : "Q-2",
            Question : "Which certification is good for Developers",
            Answers :{
                a : "PD1",
                b : "Admin",
                c : "App Builder"
            },
            cAnswer : "a"
        },
        {
            id : "Q-3",
            Question : "Which CRM ranks best among them",
            Answers :{
                a : "ZOHO",
                b : "Service Now",
                c : "Salesforce"
            },
            cAnswer : "c"
        }
    ]

    onOptionHandler(event){  //each option selected with its qstn number
        this.name=event.target.name
        this.value=event.target.value
        const {name,value}=event.target
        console.log(  this.name ,this.value)
        this.selected={...this.selected,[name]:value}
        

    }
    get notSelcted(){ //disable submit button if all qstns are not selected
        return !(Object.keys(this.selected).length === this.questionsList.length )
    }
    get ScoreHandler(){ //displayed messages based on score sucess or error
        return `slds-text-heading_large ${this.questionsList.length ===this.correctAnswers?'slds-text-color_success':'slds-text-color_error'}`
    }
    onSubmitHandler(event){
        event.preventDefault()
        let correct =this.questionsList.filter(item=>this.selected[item.id]===item.cAnswer)
        this.correctAnswers=correct.length
        console.log("this.correctAnswers",this.correctAnswers)
        this.isSubmited=true


    }
    onResetHandler(){
        this.selected={}
        this.correctAnswers=0
        this.isSubmited=false


    }
    
}