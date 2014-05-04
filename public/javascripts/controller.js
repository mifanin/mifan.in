var app = angular.module('app', []);

app.controller('mainController', function($scope,$http) {
	$scope.title = '';
	$scope.message = 'World';
	$scope.setsug=function(data){
		console.log($scope.last);
		setTimeout(function(){
			console.log("sug:"+(new Date().getTime()-$scope.last));
			if($scope.last && new Date().getTime()-$scope.last>240){
				$http.get('/users?u='+$scope.sug.user).success(function(data){
					$scope.testData = data;
				});
			}	
		}, 250);	
		$scope.last = new Date().getTime();
	}
	$http.get('/users').success(function(data) {
		$scope.testData = data;
	});
	
});


app.filter('suggest',function(){
	return function(input,param){
		if(!param){
			return input;
		}
		var res=[];
		for(var i in input){
			if(param.user && input[i].user.indexOf(param.user)==-1){
				continue;
			}
			if(param.name && input[i].name.indexOf(param.name)==-1){
				continue;
			}
			if(param.age && input[i].age!=param.age){
				continue;
			}
			res.push(input[i]);
		}
		return res;
	}
});