'use strict';

angular.module('censeurApp')
  .service('AnnuaireService', function($http) {

  	return {
  		recherche : function(token, callback) {
  			$http.get('http://localhost/api/censeur/annuaire/recherche/' + token).success(
  				function(data) {
  					callback(data);
  				}
  			);
  		}
  	}
  });
