window.ProductAddController = function ($scope, $http, $location) {
    const apiUrl = "http://localhost:3000/product/";
    $scope.submitAdd = function () {
        // alert("Add Product")
        //khoi tao du lieu tu form
        // var newStudent = {
        //     name: $scope.formApp.name,
        //     price: $scope.formApp.price,
        // }
        // console.log(newStudent);
        // $http.post(apiUrl, newStudent).then(alert('thee, thanh cong'));
        $scope.flash = true;
        $scope.err = {};
        if (!$scope.formAdd.name) {
            $scope.err.name = "Mời bạn nhập name";
            $scope.flash = false;
        }
        if (!$scope.formAdd.price) {
            $scope.err.price = "Mời bạn nhập price";
            $scope.flash = false;
        }

        if ($scope.flash) {
            $http.post(apiUrl, $scope.formAdd).then(function (response) {
                if (response.status == 201) {
                    alert('success');
                    $location.path("/list");
                }
                //     alert(123);
                //     console.log(response);
            });
        }
    }
}