window.ProductDetailController = function ($scope, $http, $location, $routeParams) {
    const apiUrl = "http://localhost:3000/product/";
    $http.get(`${apiUrl}${$routeParams.id}`).then(function (res) {
        // console.log(res);
        $scope.formAdd = res.data;
        
    })
}