import { LightningElement, wire } from 'lwc';
import { getObjectInfos } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity'

export default class GetObjectInfosDemo extends LightningElement {
    objectApiNames=[ACCOUNT_OBJECT,OPPORTUNITY_OBJECT];
    defaultRecordTypeId
    @wire(getObjectInfos,{objectApiName:'$objectApiNames'})
        ObjectInfosHandler({data,error}){
            if(data){
                console.log(data)
             }
 
        }
           
        }