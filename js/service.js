angular.module('app.service',[]).service('Service', function ($http) {

    //conectando com as APIs
    this.getPosts = function () {
       return $http.get('https://jsonplaceholder.typicode.com/posts');
    },

     this.getComments = function(){
    	return $http.get('http://jsonplaceholder.typicode.com/comments');
    },

    this.getUsers = function(){
    	return $http.get('http://jsonplaceholder.typicode.com/users');
    }


 });
