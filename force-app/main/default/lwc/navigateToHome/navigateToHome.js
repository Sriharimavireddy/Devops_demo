import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'

export default class NavigateToHome extends NavigationMixin(LightningElement) {

    onNavigationHomeHandler(){
        this[NavigationMixin.Navigate]({
            type:'standard__namedPage',
            attributes:{
                pageName:'home'
            }
        })
    }

        onNavigationChatterHandler(){
            this[NavigationMixin.Navigate]({
                type:'standard__namedPage',
                attributes:{
                    pageName:'chatter'
                }
            })

    }

}