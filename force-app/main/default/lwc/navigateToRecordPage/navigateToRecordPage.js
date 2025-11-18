import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'

export default class NavigateToRecordPage extends NavigationMixin(LightningElement) {

    onNavigationRecordPageHandler(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0011y00000dQPXEAA4',
                objectApiName:'account',
                actionName:'view'
            }
        })

    }
}