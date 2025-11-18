import { LightningElement } from 'lwc';

import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import NAME_FIELD from '@salesforce/schema/Account.Name'

export default class CustomRecordEditForm extends LightningElement {

    objectName = ACCOUNT_OBJECT
    inputValue=''
    ChangeHandler(event){
        this.inputValue = event.target.value

    }
    submitHandler(event){
        event.preventDefault()
        const arrNodes = this.template.querySelector('lightning-input')
        const arrValue =arrNodes.value

        if(!arrValue.includes('Smoke')){
            arrNodes.setCustomValidity("Please add Smoke in you test data")
        }else{
            arrNodes.setCustomValidity("")
            const fields =event.detail.fields
            fields.name = arrValue
            this.template.querySelector('lightning-record-edit-form').submit(fields)

        }
        arrNodes.reportValidity()

        }

    }