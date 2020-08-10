/**
 * Created by dario on 11/5/15.
 */
(function () {

  'use strict'

  function Car (model, year, miles) {

    this.model = model;
    this.year = year;
    this.miles = miles;

    this.toString = function () {
      return this.model + ' has done ' + this.miles + ' miles';
    };
  }

  var civic = new Car ('Honda Civic', 2009, 20000);
  var mondeo = new Car('Ford Mondeo', 2012, 30000);

  console.log(civic.toString());

})();