/**
 * Created by dario on 11/6/15.
 */
(function () {
  'use strict'

  var testModule = (function () {

    var counter = 0;

    return {
      incrementalCounter : function () {
        return counter++;
      },

      resetCounter : function () {
        console.log('counter value prior to reset: ' + counter);
        counter  = 0;
      }
    }

  })();

  testModule.incrementalCounter();

  testModule.resetCounter();


})();