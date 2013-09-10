'use strict';

angular.module('censeurApp').controller('NavbarCtrl', ['$scope', '$location', function ($scope, $location) {

		$scope.location = $location;

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
