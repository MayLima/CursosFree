angular.module('app.controller',['app.service'])
  .controller('usersController',function($scope,Service){

    $scope.users={};
    //função para pega os dados da APIs
    function GetAllUsers() {
      var getUsersData = Service.getUsers();

      getUsersData.then(function (user) {
         $scope.users = user.data;

      }, function () {
         alert("error");
         deferred.reject(error);
      });
    }
          
    GetAllUsers();
});
