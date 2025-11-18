import { LightningElement } from 'lwc';

import { ShowToastEvent } from 'lightning/platformShowToastEvent'
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import DEPARTMENT_FIELD from '@salesforce/schema/Contact.Department'
import EMAIL_FIELD from '@salesforce/schema/Contact.Email'
import NAME_FIELD from '@salesforce/schema/Contact.Name'
import Title_FIELD from '@salesforce/schema/Contact.Title'
import PHONE_FIELD from '@salesforce/schema/Contact.Phone'
import ACCOUNT_FIELD from '@salesforce/schema/Contact.AccountId'

export default class RecordEditForm extends LightningElement {
    objectName = CONTACT_OBJECT
    fields = {
        namefield : NAME_FIELD,
        titlefield : Title_FIELD,
        email : EMAIL_FIELD,
        phone : PHONE_FIELD,
        department : DEPARTMENT_FIELD,
        accountfield : ACCOUNT_FIELD
    }
    SuccessHandler(event){
    const toastmsg = new ShowToastEvent({
        title:'Success message',
        message : 'Your record has been created successfully',
        variant :'success'
    })
    this.dispatchEvent(toastmsg)
}
ResetHandler(){
   const arrlist = this.template.querySelectorAll('lightning-input-field')
     if(arrlist){
     Array.from(arrlist).forEach(field=>{
        field.reset()
    })
}

}
}