'use strict';

angular.module('censeurApp')
  .controller('AnnuaireCtrl', function ($scope, AnnuaireService) {
  	AnnuaireService.recherche('etu', function(resultats) {
  		$scope.resultats = resultats;
  	});
  });
