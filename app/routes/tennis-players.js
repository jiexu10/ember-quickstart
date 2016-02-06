import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['Roger Federer', 'Andy Murray', 'Rafael Nadal', 'Novak Djokovic'];
  }
});
