angular.module('myApp', ['ngRoute']).config(($routeProvider) => {
    $routeProvider.when(
        '/list', {
        //dinh nghia route
        templateUrl: '../views/list.html',
        controller: ProductListController
    }
    ).when(
        '/add', {
        //dinh nghia route
        templateUrl: '../views/add.html',
        controller: ProductAddController
    }
    )
    .when(
        '/edit/:id', {
        //dinh nghia route
        templateUrl: '../views/edit.html',
        controller: ProductEditController
    }
    )
    .when(
        '/detail/:id', {
        //dinh nghia route
        templateUrl: '../views/detail.html',
        controller: ProductDetailController
    }
    )
})

//
