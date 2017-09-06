var obj = [{
                name:'热菜',
                value:[{
                    name:'西红柿炒鸡蛋',
                    price:.1
                },{
                    name:'红烧肉',
                    price:.2
                },{
                    name:'醋溜排骨',
                    price:.3
                }
                ]
            },{
                name:'凉菜',
                value:[{
                    name:'拍黄瓜',
                    price:.4
                },{
                    name:'老醋花生',
                    price:.5
                },{
                    name:'雪盖火焰山',
                    price:.6
                }]
            },{
                name:'甜点',
                value:[{
                    name:'拔丝香蕉',
                    price:.7
                },{
                    name:'蛋挞',
                    price:.8
                },{
                    name:'慕斯蛋糕',
                    price:.9
                }]
            },{
                name:'饮料',
                value:[{
                    name:'北冰洋',
                    price:1
                },{
                    name:'橙汁',
                    price:1.1
                },{
                    name:'青岛啤酒',
                    price:1.2
                }]
            }]

var gulp = require('gulp')

var webserver = require('gulp-webserver') //这个启动后端服务器的 包

var connect = require('gulp-connect') //这个是启动前端服务器的 包

var urlTool = require('url');

var qs = require('qs');

gulp.task('mockServer',function(){
    gulp.src('.')
        .pipe(webserver({
            port:3000,
            middleware:function(req,res,next){

                var method = req.method;

                var urlObj = urlTool.parse(req.url)

                var pathname = urlObj.pathname;

                res.setHeader('Access-Control-Allow-Origin','*')

                if(method == 'GET'){

                    switch (pathname) {
                        case '/goodslist':
                            res.setHeader('content-type','application/json;charset=utf-8')
                            res.write(JSON.stringify(obj));
                            res.end();
                            break;

                        default:
                            break;
                    }

                }else if(method == 'POST'){

                var postParamsStr = '';        

                req.on('data',function(chunk){
                    postParamsStr +=chunk;
                })

                req.on('end',function(){


                    var postParamsJson = 
                    
                    postParamsStr.indexOf('{')!=-1&&postParamsStr.indexOf('}')!=-1

                    ?

                    JSON.parse(postParamsStr) 

                    :

                    qs.parse(postParamsStr)




                    switch (pathname) {
                        case '/login':
                           if(postParamsJson.userName == '张三' && postParamsJson.password==123456) {

                           }
                            break;
                        case '/register':
                            
                            break;
                        default:
                            break;
                    }
                })




                }

            }
        }))
})


gulp.task('httpServer',function(){
    connect.server({
        port:8080,
        livereload:true
    })
})

gulp.task('default',['mockServer','httpServer'])

