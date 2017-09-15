# angular内置事件

angular内置事件是angularJS自带的事件 不需要引入其他的JS文件。

## Event name
```js
//1. '$loactionChangeStart'
//2. '$loactionChangeSuccess'
```

## 如何使用 (How to use it)
在任何可以注入$scope 或者 $rootScope的地方使用
```js
$rootScope.$on('$loactionChangeStart',function(event,newUrl,oldUrl,newState,oldState){

})
$rootScope.$on('$loactionChangeSuccess',function(event,newUrl,oldUrl,newState,oldState){

})
// 或者你也可以使用 $scope 来监听 因为这个事件是通过$rootScope.$broadcast 来进行广播的 所以任何子作用域都能监听得到

```