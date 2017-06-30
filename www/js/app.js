'use strict';

angular.module('defaultApp',['ui.router','ngResource']);
angular.module('defaultApp').config(function($stateProvider){
}).run(function($state){
   $state.go('default');
});

