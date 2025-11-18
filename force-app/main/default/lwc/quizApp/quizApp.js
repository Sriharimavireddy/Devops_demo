import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected={}

    myQuestions=[
        {
            id:"Question-1",
            Question:"Which of the following is not a template loop?",
            answers:{
                a:"for-each",
                b:"map",
                c:"iterator"
            },
            correctAnswer:"b"
        },
        {
            id:"Question-2",
            Question:"Which of the following file is not part of LWC?",
            answers:{
                a:".js",
                b:".svg",
                c:".apex"
            },
            correctAnswer:"c"
        },
        {
            id:"Question-3",
            Question:"Which one the following is not a dirctive?",
            answers:{
                a:"if:true",
                b:"@track",
                c:"map"
            },
            correctAnswer:"c"
        }
    ]

    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }

    changeHandler(event){
        console.log("name",event.target.name)
        console.log("value",event.target.value)
        const{name,value}=event.target
        this.selected={...this.selected,[name]:value}
    }
    submithandler(){

    }
    resethandler(){

    }


}