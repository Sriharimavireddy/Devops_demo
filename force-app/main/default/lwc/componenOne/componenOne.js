import { LightningElement ,track} from 'lwc';

export default class ComponenOne extends LightningElement {
@track greeting ='Sri Hari';

greetinghandler(event){
    this.greeting= event.target.value;
}

}