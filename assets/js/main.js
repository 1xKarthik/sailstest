(function () {
    'use strict';

    angular
        .module('myApp', [])
        .controller('mainCtrl', MainCtrl);

    MainCtrl.$inject = ['$scope', '$http'];

    function MainCtrl($scope, $http) {

        $http.get('/user').then(function (response) {
            $scope.things = response.data;
        });

        // $scope.things = [
        //     {
        //         id: 1,
        //         name: 'raju'
        //     },
        //     {
        //         id: 2,
        //         name: 'ramu'
        //     }, {
        //         id: 3,
        //         name: 'pavan'
        //     }, {
        //         id: 4,
        //         name: 'arseny'
        //     }, {
        //         id: 5,
        //         name: 'roman'
        //     }
        // ]
    }
})();