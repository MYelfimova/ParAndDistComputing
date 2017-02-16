(function () {
  'use strict';
  var app = angular.module('myLabs', []);
  // app.controller('labNumber', function($scope){
  //
  // });

  app.directive("field1", function() {
    return {
      restrict : "A",
      templateUrl : "field1.html",
      controller: function ($scope) {
        $scope.time1 = 0;
        $scope.number1 = 0;
        $scope.countTime1 = function($scope){
          //*set timer
          var then = new Date();
          $scope.time1 = ".";
          //*1генерую масив
          var arr = [];
          for(var i = 0; i < $scope.number1; i++){
            var row = [];
            for(var j = 0; j < $scope.number1; j++){
              row.push(Math.floor(Math.random() * 1000));
            };
            arr.push(row);
          };

          $scope.time1 = ". .";
          //*генерую вектор
          var vec = [];
          for(var k = 0; k < $scope.number1; k++){
            vec.push(Math.floor(Math.random() * 1000));
          };

          $scope.time1 = ". . .";
          //*множу вектор на матрицю
          var mult = [];
          for(var i = 0; i < $scope.number1; i++){
            var temp = 0
            for(var j = 0; j < $scope.number1; j++){
              temp+=arr[i][j]*vec[j];
            };
            mult.push(temp);
          };

          //*stop timer
          var now = new Date();
          $scope.time1 = now - then;
          console.log(mult);
        };
      },
      controllerAs: "lab1Ctrl"
    };
});

})();
