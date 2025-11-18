import { LightningElement } from 'lwc';

import { NavigationMixin } from 'lightning/navigation'

export default class NavigateTonavItemPage extends NavigationMixin(LightningElement) {
    onNavigationPageHandler(){

        this[NavigationMixin.Navigate]({
            type:'standard__navItemPage',
            attributes:{
                apiName:'Lightning_Messaging_service'
            }
        })
    }
}