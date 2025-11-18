import { LightningElement } from 'lwc';

export default class SelectQuery extends LightningElement {

    userNames=["hari","sus","pavan","chaitanya"]

    onClickDisplayMessage(event){

        const clickText=this.template.querySelector('h1')
        console.log(clickText.innerText)
        clickText.style.border="2px solid red"

        const UsersList = this.template.querySelectorAll('.names')
        console.log(UsersList)
        Array.from(UsersList).forEach(item=>{console.log(item.innerText)
        item.setAttribute("title",item.innerText)
    })
       

    }
}