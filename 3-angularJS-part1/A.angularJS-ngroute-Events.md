# angularJS ngRoute Events

# Let's start

```js
angular.module('app',[]).run(['$rootScope',function($rootScope){

    $rootScope.$on('$routeChangeStart',function(event,currentRoute,previousRoute){
        // 第一个参数是 事件对象
        // 第二个参数是 当前路由
        // 第三个参数是 上一个路由
    })

    $rootScope.$on('$routeChangeSuccess',function(event,currentRoute,previousRoute){
        $rootScope.path = currentRoute.$$route.originalPath //在路由跳转成功以后获取路由路径 存储在$rootScope.path 里
    })

    $rootScope.$on('$routeChangeError',function(event,currentRoute,previousRoute,Error){
       //第四个参数是 错误信息
    })

    $rootScope.$on('$routeUpdate',function(){ //这个我没法演示 sorry this event I dont konw how to trigger 

    })
    }])
```

# demo (这是一个ngRoute路由自动替换选中样式的demo)

```html
<!DOCTYPE html>
<html ng-app="app">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .active{
            background:red;
        }
    </style>
</head>
<body ng-controller="main">
    <a href="#!/home" ng-class="path=='/home' ? 'active' : '' ">home</a>
    <a href="#!/about" ng-class="path=='/about'  ? 'active' : '' ">about</a>
    <a href="#!/me" ng-class="path=='/me'  ? 'active' : '' ">me</a>
    <ng-view></ng-view>
</body>
<script src="./angular.js"></script>
<script src="./angular-route.js"></script>
</html>
<script>
    angular.module('app',['ngRoute'])
           .controller('main',['$scope','$location',function($scope,$location){

           

           }])
           .config(['$routeProvider',function($routeProvider){

            $routeProvider.when('/home',{
                template:'home'
            })
            .when('/about',{
                template:'about'
            })
            .when('/me',{
                template:'<div>me</div>'
            })

           }])
           .run(['$rootScope',function($rootScope){

            $rootScope.$on('$routeChangeStart',function(event,currentRoute,previousRoute){
                
            })

            $rootScope.$on('$routeChangeSuccess',function(event,currentRoute,previousRoute){
                $rootScope.path = currentRoute.$$route.originalPath
            })

            $rootScope.$on('$routeChangeError',function(event,currentRoute,previousRoute,Error){
                console.log(event.name,arguments)
            })

            $rootScope.$on('$routeUpdate',function(){ //这个我没法演示

            })
           }])
</script>
```
