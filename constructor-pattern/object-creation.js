/**
 * Created by dario on 11/4/15.
 */
(function () {
  'use strict'

  var newObject = {};

  Object.defineProperty( newObject, 'someKey', {
    value : 2,
    writable : false,
    enumerable : true,
    configurable : true
  });

  console.log(Object.getOwnPropertyDescriptor(newObject, 'someKey'));

  /* or */
  var newDifferentObject = Object.create(Object.prototype, {
    key1 : {value : 1, enumerable : true, configurable : false, writable : false},
    key2 : {value : 2, enumerable : false, configurable : true, writable : true}
  });

  console.log(Object.getOwnPropertyDescriptor(newDifferentObject, 'key1'));
  console.log(Object.getOwnPropertyDescriptor(newDifferentObject, 'key2'));

  /* or this */
  var newAnotherDifferentObject = new Object();


  /*custome setter and getter*/
  var someKeyVal = 1;

  Object.defineProperty( newObject, 'anotherKey', {
    get : function () {
      console.log('get!');
      return someKeyVal;
    },
    set : function (val) { someKeyVal = val;},

    enumerable : true,
    configurable : true
  });

  console.log(Object.getOwnPropertyDescriptor(newObject, 'someKey'));
  newObject.anotherKey = 3;
  console.log(newObject.anotherKey);

})();