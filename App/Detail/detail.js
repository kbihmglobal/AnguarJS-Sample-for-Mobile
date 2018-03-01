window.visro.controller('detailController', ['$scope', '$routeParams', '$http', '$location', '$window', function ($scope, $routeParams, $http, $location, $window) {
    $scope.GetJokesByCategoryId = function () {
        $http({
            method: 'GET',
            url: 'http://jokes.learnkode.com/api/Categories/' + $scope.id + "?page=" + 0 + "&records=" + 10
        }).then(function successCallback(response) {
            $scope.jokes = response.data;
            $scope.hasNextItems = response.data.length == $scope.records;
            $scope.isLoading = false;
            init_template();
        }, function errorCallback(response) {
            $window.alert('error:' + response.data + response.status + response.headers + response.statusText + response.config);
        });
    };

    $scope.getCategories = function () {
        $http({
            method: 'GET',
            url: 'http://jokes.learnkode.com/api/Categories'
        }).then(function successCallback(response) {
            $scope.categories = response.data;
        }, function errorCallback(response) {
            $scope.isLoading = false;
            $window.alert('error:' + response.data + response.status + response.headers + response.statusText + response.config);
        });
    }

    $scope.move = function (id) {
        $window.location.href = '#/detail/' + id;
    }

    $scope.prevRecords = function () {
        $scope.jokes = {};
        $scope.isLoading = true;
        $scope.page -= 1;
        $scope.GetJokesByCategoryId();
        $scope.isSecondPage = ($scope.page != 0);
    }

    $scope.nextRecords = function () {
        $scope.jokes = {};
        $scope.isLoading = true;
        $scope.page += 1;
        $scope.GetJokesByCategoryId();
        $scope.isSecondPage = ($scope.page != 0);
    }
    $scope.hasNextItems = false;
    $scope.isLoading = true;
    $scope.page = 0;
    $scope.records = 10;
    $scope.id = $routeParams.id;
    $scope.getCategories();
    $scope.GetJokesByCategoryId();
}]);
