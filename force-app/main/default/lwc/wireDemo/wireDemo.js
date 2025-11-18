import { LightningElement,wire} from 'lwc';
import { getRecord } from 'lightning/uiRecordApi'
import UID from '@salesforce/user/Id'
import NAME_FIELD from '@salesforce/schema/User.Name'
import EMAIL_FIELD from '@salesforce/schema/User.Email'


export default class WireDemo extends LightningElement {
    userID= UID;
    userDetails
    Errormessage
    @wire(getRecord, {recordId:'005N000000D5bg3IAB', fields:[NAME_FIELD,EMAIL_FIELD]})
    RecordDetailsHandler({data,error}){
        //console.log(Response)
        if(data){
            this.userDetails = data.fields
                 
        }if(error){
           this.Errormessage = console.error(error)
        }

    }
}