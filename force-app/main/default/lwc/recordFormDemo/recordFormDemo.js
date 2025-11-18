import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'

import  ACCOUNT_OBJECT  from '@salesforce/schema/Account'
import  NAME_FIELD  from '@salesforce/schema/Account.Name'
import  ANNUAL_REVENUE_FIELD  from '@salesforce/schema/Account.AnnualRevenue'
import  PHONE_FIELD  from '@salesforce/schema/Account.Phone'

export default class RecordFormDemo extends LightningElement {
    objectName = ACCOUNT_OBJECT
    fieldList = [NAME_FIELD, ANNUAL_REVENUE_FIELD, PHONE_FIELD]

    successHandler(event){
        console.log(event.detail.id)
        const event1 = new ShowToastEvent({
            title : 'Account Created',
            message : 'Your account has been created successfully',
            variant : 'success'
        })
        this.dispatchEvent(event1)

    }

}