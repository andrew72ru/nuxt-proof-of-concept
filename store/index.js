import Vuex from 'vuex';
import event from './modules/event'
import speaker from './modules/speaker'

new Vuex.Store({
  modules: {
    event,
    speaker
  }
});
