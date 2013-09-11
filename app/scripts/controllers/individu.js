'use strict';

angular.module('censeurApp')
		   .controller('IndividuCtrl',  ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

		$scope.tabs = [
      { title:"Etat civil",		partial:"views/partials/etatCivil.html"		},
      { title:"Coordonnées",	partial:"views/partials/coordonnees.html"	}
    ];

    $scope.tabs[0].active = true;
		
  }]);
