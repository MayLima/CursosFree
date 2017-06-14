angular.module('app.controller',['app.service'])
  .controller('postController',function($scope,Service){

    $scope.posts={};
    //função para pega os dados da APIs
    function GetAllPosts() 
    {
      var getPostsData = Service.getPosts();

      getPostsData.then(function (post) {
         $scope.posts = post.data;

      }, function(err) {
    console.error('ERR', err.status);
      });
    }
          
    GetAllPosts();

});
