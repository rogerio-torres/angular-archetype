angular.module('defaultApp').config(defaultState);
defaultState.$inject = ['$stateProvider']

function defaultState($stateProvider) {
  $stateProvider.state('default', {
    url: '/',
    templateUrl: '../../partials/default.html',
    controller: 'DefaultController'
  });
};