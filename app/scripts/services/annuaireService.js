'use strict';

angular.module('censeurApp')
  .service('AnnuaireService', function($http) {

  	return {
  		recherche : function(token, callback) {
  			$http.get('http://localhost/api/censeur/annuaire/recherche/' + token).success(
        //$http.get('http://localhost:9000/api/censeur/annuaire/recherche/mock.json').success(
  				function(data) {
  					callback(data);
  				}
  			);
  		}
  	}
  });
