import { LightningElement } from 'lwc';

export default class CryptoQuiz extends LightningElement {
    selected={}
    correctAnswers=0
    isSubmitted=false

myQuestions=[
    {id:"Question-1",
    Question:"Which is the costlist crypto",
    answers:{
        a:"Doge",
        b:"Etherium",
        c:"shibu"
    },
    cAnswer:"b"
},
{id:"Question-2",
Question:"On which coin market depends on?",
answers:{
    a:"Bitcoin",
    b:"Etherium",
    c:"Solana"
},
cAnswer:"a"
},
{id:"Question-3",
Question:"Which crypto is cheap among",
answers:{
    a:"litecoin",
    b:"Etherium",
    c:"shibu"
},
cAnswer:"c"
},


]
get allAreNotSelected(){
    return !(Object.keys(this.selected).length === this.myQuestions.length)
}
isScoredFull(){
    retun `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers?'slds-text-color_success':'slds-text-color_error'}`
}
changeHandler(event){
    console.log("name",event.target.name)
    console.log("value",event.target.value)
    const{name,value}=event.target
    this.selected ={...this.selected,[name]:value}
   // console.log(this.selected)
    

}
submitHandler(event){
    event.preventDefault()
    isSubmitted=true
    let correct=this.myQuestions.filter(item=>this.selected[item.id] === item.cAnswer)
    this.correctAnswers =correct.length
    console.log("this.correctAnswers",this.correctAnswers)
   
}
resetHandler(){
    this.selected={}
    this.correctAnswers=0
    isSubmitted=false

}





}