import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils'

export default class NavigateToObjectPage extends NavigationMixin(LightningElement) {

    onNavigationAccountHandler(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                ObjectApiName:'Account',
                actionName:'new'
            }
        })


    }

    onNavigationAccountValuesHandler(){
       const defaultValues = encodeDefaultFieldValues({
            FirstName:'SRI',
            LastName:'Hari'

        });
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                ObjectApiName:'Contact',
                actionName:'new'
            },
            state:{
                defaultFieldValues :defaultValues

            }
                
            
        });

    }
    onNavigationAccountListViewHandler(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                ObjectApiName:'Contact',
                actionName:'list'
            },
            state:{
                filterName:'Recent'

            }
                
            
        });
    }
}