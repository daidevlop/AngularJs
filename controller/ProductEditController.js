window.ProductEditController = function ($scope, $http, $location, $routeParams) {
    const apiUrl = "http://localhost:3000/product/";
    $http.get(`${apiUrl}${$routeParams.id}`).then(function (res) {
        // console.log(res);
        $scope.formAdd = res.data;
        // console.log(123);
        $scope.edit = function () {
            // console.log(123);
            // console.log($routeParams.id);
            $scope.flash = true;
            $scope.err = {};
            if (!$scope.formAdd.name) {
                $scope.err.name = "nhap ten";
                $scope.flash = false;
            }
            if (!$scope.formAdd.price) {
                $scope.err.price = "nhap gia";
                $scope.flash = false;
            }

            if ($scope.flash) {
                $http.put(`${apiUrl}${$routeParams.id}`, $scope.formAdd).then(function (response) {
                    if (response.status == 200) {
                        alert('success');
                        // $location.path("/list");
                    }
                    //     alert(123);
                    //     console.log(response);
                });
            }
        }
    })
}