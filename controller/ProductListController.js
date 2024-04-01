window.ProductListController = function ($scope, $http, $location) {
    const apiUrl = "http://localhost:3000/product/";
    $http.get(apiUrl).then(function (response) {
        console.log(response);
        if (response.status == 200) {
            $scope.products = response.data
        }else{
            alert('bảng không tồn tại');
        }
        // console.log($scope.product);
    })
    $scope.deleteProduct = function (id) {
        if (confirm("Are you sure you want to delete")) {
            $http.delete(`${apiUrl}${id}`).then(alert('xoa thanh cong'))
            $location.path("/list");
        } else {
            alert('Xoa that bai');
        }
    }

    //add
}
// $http.get(link url)
// .then(function(res) {
//     if (response.status == 200) {
//         $scope.products = response.data
//     }
// })

// window.ProductAddController = function ($scope, $http, $location) {
//     const apiUrl = "http://localhost:3000/product/";
//     $scope.submitAdd = function () {
//         alert("Add Product")
        //khoi tao du lieu tu form
        // var newStudent = {
        //     name: $scope.formApp.name,
        //     price: $scope.formApp.price,
        // }
        // console.log(newStudent);
        // $http.post(apiUrl, newStudent).then(alert('thee, thanh cong'));
        // $http.post(apiUrl, $scope.formAdd).then(function (response) {
        //     if (response.status == 201) {
        //         alert('success');
        //         $location.path("/list");
        //     }
        //     alert(123);
        //     console.log(response);
        // });
       
//     }
// }