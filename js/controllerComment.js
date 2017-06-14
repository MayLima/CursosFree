angular.module('app.controller',['app.service'])
.controller('commentController',function($scope,Service){

    $scope.comments={};
    //função para pega os dados da APIs
    function GetAllComment() {
      var getCommentsData = Service.getComments();

      getCommentsData.then(function (comment) {
         $scope.comments = comment.data;


      }, function(err) {
    console.error('ERR', err.status);

      });
    }
          
    GetAllComment();
});
