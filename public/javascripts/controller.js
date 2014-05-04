var app = angular.module('app', []);

app.controller('MainCtrl', function($scope) {
$scope.title = 'test';
$scope.message = 'World';

$scope.testData=[{
	name:'testname1',
	value:'testvalue1'
},{
	name:'testname2',
	value:'testvalue2'
}]
	
});

