'use strict';

angular.module('censeurApp')
  .controller('AnnuaireCtrl', function ($scope, $timeout, AnnuaireService,_,promiseTracker) {

  	$scope.token = '';
    $scope.layout = 'grid';
    
    $scope.resultatsTracker = promiseTracker('resultats');
    
  	$scope.recherche = function() {
      if (!_.string.isBlank($scope.token)) {
    	 AnnuaireService.recherche($scope.token, function(resultats) {
  		  	$scope.resultats = resultats;
  		  });		
      } else {
        $scope.resultats = [];
      }
  	}
  
    var timer=false;

    $scope.$watch('token', function(){
      if (timer){
        $timeout.cancel(timer)
      }  
      timer = $timeout(function(){
        $scope.recherche();
      }, 200)
    });

    $scope.switchLayout = function(layout) {
      $scope.layout = layout;
    }

  });
