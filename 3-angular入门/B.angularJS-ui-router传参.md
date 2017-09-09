# ui.router 传参

## 如何配置
```js
$stateProvider.state('home',{
    params:{
        key:'默认参数'
    }
})
```
## 如何传递
```html
<div ui-sref="home({key:[1,2,3,4]})">home</div>
```
## 如何接收
在接收参数的路由页面的控制器里
```js
controller:['$stateParams','$scope',function($stateParams,$scope){
    //this.data = $stateParams
    //$scope.data = $stateParams
    //console.log($stateParams)
}]
```