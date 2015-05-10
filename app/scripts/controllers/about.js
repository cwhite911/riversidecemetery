'use strict';

/**
 * @ngdoc function
 * @name rscApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the rscApp
 */
angular.module('rscApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
