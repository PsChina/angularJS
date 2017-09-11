# angularJS ui.router

## ui.router 与 ngRoute 的功能相似

    区别是ui.router 能进行路由嵌套 ngRoute不行

## 如何使用

    1. 下载angular-ui-router.js

    2. 引入 <script src="./js/angular-ui-router.js"></script>

    3. 依赖注入 angular.module('app',['ui.router']);

## demo

```html
<!DOCTYPE html>
<html ng-app="app">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
    
    .top{
        display: flex;
    }
    .top div {
        flex: 1
    }
    .active{
        background: red
    }
    </style>
</head>

<body ng-controller="main">
    
    <div class="top">
        <div ui-sref="home" ui-sref-active="active">home</div>
        <div ui-sref="about" ui-sref-active="active">about</div>
        <div ui-sref="me" ui-sref-active="active">me</div>
        <!--ui-sref-active= 设置选中样式的类名  -->
    </div>

    <ui-view></ui-view>

</body>
    <script src="./js/angular.min.js"></script>
    <script src="./js/angular-ui-router.js"></script>
</html>
<script>
    angular.module('app',['ui.router'])
           .controller('main',[function(){

           }])
           .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){ //依赖注入 $stateProvider 类似 $routeProvider 但没实现otherwise 方法 而是在另一个服务里面实现了就是$urlRouterProvider 其中二级路由的默认页面是使用when方法配置的

               $urlRouterProvider.otherwise('about'); //1级路由 默认页面

               $urlRouterProvider.when('/home','/home/page2'); //2级路由 默认页面

            //    $urlRouterProvider.when('/home/page2','/home/page2/sanji');

               $stateProvider.state('home',{//state 类似 ngRoute 的when方法 不过第一个参数 是路由名称 而非路由路径
                    url:'/home',  //ui.route 设置路径的key
                    template:`
                        <div>
                            <div ui-sref="home.page1" ui-sref-active='active'>子页面1</div>
                            <div ui-sref="home.page2" ui-sref-active='active'>子页面2</div>                            
                            <p>home</p>
                            <ui-view></ui-view>  <!-- 设置二级路由 -->
                        </div>
                    `,

               })
               .state('about',{
                   url:'/about',
                   template:`
                   <div>about</div>
                   `    
               })
               .state('me',{
                   url:'/me',
                   template:`
                   <div>me</div>
                   `  
               })
               .state('home.page1',{ //二级路由
                    url:'/page1',
                    template:`
                    <div>page1</div>
                    `  
               })
               .state('home.page2',{ //二级路由
                    url:'/page2',
                    template:`
                    <div>page2</div>
                    `                    
               })
           }])
</script>
```
