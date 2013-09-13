'use strict';

angular.module('censeurApp')
  .controller('AnnuaireCtrl', function ($scope, AnnuaireService) {
  	$scope.token = '';
  	$scope.recherche = function() {
    	AnnuaireService.recherche($scope.token, function(resultats) {
  			$scope.resultats = resultats;
  		});		
  	}

  });
