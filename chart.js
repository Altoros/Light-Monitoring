.controller('BlankPageCtrl', ['$scope', '$http', '$compile', function ($scope, $http, $compile) {
    $http
        .get('http://127.0.0.1:1880/light')
        .then(function (response) {
            $scope.points = response.data.data;
            document.querySelector('#light-chart').addSeries({
                id: 'light-time', name: "Light Data", data: $scope.points
            });
        });
}])
