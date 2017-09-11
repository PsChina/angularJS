# ui.router 路由事件

## 准备

    下载   
    angular-ui-router.js
    stateEvents.js

    引入
## 如何开始
```js
    angular.module('app',['ui.router','ui.router.state.events'])
           .config()  //在这里面配置路由
           .run(['$rootScope',function($rootScope){
               $rootScope.$on('stateChangeStart',function(event,currentRoute,currentParams,previousRoute,previousParams){ 
                   //点击路由 就会开始跳转
                   
               })
               $rootScope.$on('stateChangeCancel',function(){  //这个没有演示

               })
               $rootScope.$on('stateChangeSuccess',function(event,currentRoute,currentParams,previousRoute,previousParams){
                   //点击路由 路由成功切换的时候出发
               })
               $rootScope.$on('stateChangeError',function(event,currentRoute,currentParams,previousRoute,previousParams,error){
                   // 例子 当templateUrl 的模板没有实现 或者没有起http-server的时候会触发失败
               })
               $rootScope.$on('stateNotFound',function(event,wantTo,previousRoute,params){
                   // 你在 ui-sref="没有在config里面的state()里面配置的路由的时候" 并且点击它的时候 会触发
               })
           }])
```