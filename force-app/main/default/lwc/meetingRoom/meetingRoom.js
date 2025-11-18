import { LightningElement , api} from 'lwc';

export default class MeetingRoom extends LightningElement {
    @api meetingRoomInfo = {roomName:'A-1',roomCapacity:'3'}

    @api showRoomDetails=false;
}