trigger oppOppline on Opportunity (after insert) {
    if(trigger.isafter && trigger.isinsert){
       
        for(opportunity oppnew: trigger.new){
            opportunitylineitem oppline = new opportunitylineitem();
            oppline.OpportunityId =oppnew.id;
            oppline.Product2Id='GenWatt Diesel 1000kW';
            oppline.Quantity=1;
            insert oppline;
        }
    }

}