import { LightningElement ,track} from 'lwc';

export default class ConditionalReder extends LightningElement {
      @track displaydiv=false;
      @track city=['rajahmundry','hyderabad','kakinada','chennai'];
      
      divHandler(event){

      this.displaydiv=event.target.checked;
      }
      
}