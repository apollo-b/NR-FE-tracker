import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return Ember.RSVP.hash({
      sighting: this.store.findRecord('sighting', params.sighting_id),
      cryptid: this.store.findAll('cryptid'),
      witnesses: this.store.findAll('witness')
    });
  }
});
