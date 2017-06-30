'use strict';

angular.module('defaultApp')
    .service('DefaultService', DefaultService);

DefaultService.$inject = [];

function DefaultService() {

    function _doSomething(message) {
        return "Hello world!";
    }

    return {
        doSomething: _doSomething
    };
}