'use strict';

/**
 * @ngdoc function
 * @name studyYeomanAngularApp.controller:ApiimdbctrlCtrl
 * @description
 * # ApiimdbctrlCtrl
 * Controller of the studyYeomanAngularApp
 */
angular.module('studyYeomanAngularApp')
  .controller('ImdbCtrl', function ($scope, $http) {

        $scope.teste = 'teste';
        $scope.filmes = [];

   $scope.consuma = function(){
        $http.get('http://www.omdbapi.com/?t='+$scope.filme+'&y=&plot=short&r=json')
            .success(function(data){
                $scope.filmes = data;
            });
    }
  });
