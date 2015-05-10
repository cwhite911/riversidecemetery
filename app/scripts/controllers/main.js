'use strict';

/**
 * @ngdoc function
 * @name rscApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rscApp
 */
angular.module('rscApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
