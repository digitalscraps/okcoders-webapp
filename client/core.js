var angularApp = angular.module('angularApp', []);

function mainController($scope, $http){
	$scope.formData = {};

	$http.get('/comics')
		.success(function(data){
			$scope.comics = data;
			 console.log(data);
		})
		.error(function(data){
			console.log('Error: ' + data);

		});
}