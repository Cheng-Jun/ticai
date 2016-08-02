var ticai=angular.module('myApp',[]);
ticai.directive('nav',function(){
	return{
		restrict:'E',
		templateUrl:'view/nav.html',
		replace:true,
		scope:{
			myId:'@',
			myData:"=",
			myPath:'='
		},
		link:function(s,e,a){
			console.log(e)
			e.on('click','li a',function(){
				console.log(222)
				$(this).addClass('active').parent('li').siblings('li').find('a').removeClass('active');
			});
		}
	}
})
ticai.controller('listTitle',['$scope','$location',function($scope,$location){
	$scope.Title=[
		{title:'活动数据',route:'/'},
		{title:'用户数据',route:'user'},
		{title:'实物奖品',route:'award'},
		{title:'线下活动',route:'offline'},
		{title:'抽奖设置',route:'set'}
	];
	$scope.Path=$location.path().slice(1);
	console.log($scope.Path);
	
}])


//右侧路由控制

var table=angular.module('myTable',['ngRoute','ngSanitize']);
table.config(function($routeProvider){
	$routeProvider.when('/',{
		templateUrl:'view/active.html',
		controller:'Active'
	}).when('/user',{
		templateUrl:'view/user.html',
		//controller:'User'
	}).when('/award',{
		templateUrl:'view/award.html',
		//controller:'Award'
	}).when('/offline',{
		templateUrl:'view/offline.html',
		//controller:'Offline'
	}).when('/set',{
		templateUrl:'view/set.html',
		//controller:'Set'
	}).otherwise({
		redirectTo:'/'
	})
})

table.controller('Active',['$scope',function($scope){
	
	//日历插件调用
	
	var dateRange = new pickerDateRange('date_demo3', {
		//aRecent7Days : 'aRecent7DaysDemo3', //最近7天
		isTodayValid : false,
		//startDate : '2013-04-14',
		//endDate : '2013-04-21',
		//needCompare : true,
		//isSingleDay : true,
		//shortOpr : true,
		defaultText : ' 至 ',
		inputTrigger : 'input_trigger_demo3',
		theme : 'ta',
		success : function(obj) {
			//$("#dCon_demo3").html('开始时间 : ' + obj.startDate + '<br/>结束时间 : ' + obj.endDate);
		}
	});
	// 日历插件结束
	
	$scope.active=[
		{
			name:'111',
			img:'images/1.png',
			step:'2400',
			donation:'2.5元',
			award:'一等奖',
			updateTime:'2016/9/1',
			contact:'程俊<br/>15256033883'
		},
		{
			name:'1.5',
			img:'images/1.png',
			step:'2500',
			donation:'4.5元',
			award:'3等奖',
			updateTime:'2016/7/1',
			contact:'程俊<br/>15256033883'
		},
		{
			name:'444',
			img:'images/1.png',
			step:'2100',
			donation:'1.5元',
			award:'2等奖',
			updateTime:'2016/8/1',
			contact:'程俊<br/>15256033883'
		},
	];
	$scope.Orderby=function(obj){
		$scope.oby=obj;
	}
	
}])

//手动加载多个ng-app
angular.element(document).ready(
   function (){
    angular.bootstrap(document.getElementById("right"), ["myTable"]);
   }
 );