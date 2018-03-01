window.visro.controller('homeController', ['$scope', '$http', '$window', '$cordovaSocialSharing', function ($scope, $http, $window, $cordovaSocialSharing) {
    $scope.title = 'hello you are in home page';

    $scope.colors = ["bg-red-dark fa-odnoklassniki", "bg-green-dark fa-reddit",
        "bg-blue-dark fa-wechat", "bg-magenta-dark fa-whatsapp", "bg-orange-dark fa-smile-o",
        "bg-teal-dark fa-frown-o", "bg-night-dark fa-child", "bg-red-light fa-meh-o", "bg-blue-dark fa-smile-o"];

    $scope.getColors = function ($index) {
        return $scope.colors[$index] != null ? $scope.colors[$index] : 'bg-blue-dark fa-smile-o';
    };

    $scope.getCategories = function () {
        $http({
            method: 'GET',
            url: 'http://jokes.learnkode.com/api/Categories'
        }).then(function successCallback(response) {
            $scope.isLoading = false;
            $scope.categories = response.data;
        }, function errorCallback(response) {
            $scope.isLoading = false;
            $window.alert('error:' + response.data + response.status + response.headers + response.statusText + response.config);
        });
    }

    $scope.move = function (id) {
        alert(id);
        $cordovaSocialSharing.share("mess", "dfg", null, null) // Share via native share sheet
    .then(function (result) {
        // Success!
    }, function (err) {
        // An error occured. Show a message to the user
    });
        $window.location.href = '#/detail/' + id;
    }

    $scope.isLoading = true;
    $scope.getCategories();
}]);