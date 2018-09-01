'use strict'

app.config(function ($routeProvider) {
  $routeProvider
    .when("/page1", {
      templateUrl: "page1.html"
    })
    .when("/page2/:page", {
      templateUrl: "page2.html",
      controller: 'page2Controller'
    })
    .when("/page3", {
      templateUrl: "page3.html"
    })
    .otherwise({
      //กรณีไม่พบที่อยู่ url
      redirectTo: '/page1'
    });
});


app.controller("myAppController", function ($scope, $routeParams) {
  console.log("Hi");

  // $scope.$on('$routeChangeSuccess', function () {
  //   $scope.page = parseInt($routeParams.page);
  // });
});

app.controller("page2Controller", function ($scope, $routeParams, $http) {
  console.log("page2Controller");
  var id = $routeParams.page;
  $scope.page_id = id;

  // $http.get('api_url').then(function (response) {
  //   console.log(response);
  // });
});