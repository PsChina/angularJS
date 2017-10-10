var gulp = require('gulp');
var webserver = require('gulp-webserver');
var qs = require('qs')
var url = require('url');

var fs = require('fs');

var buffer = fs.readFileSync('./dataBase.json');

var dataBase = {};

if(buffer.length){
    dataBase=JSON.parse(buffer.toString());
}else{
    dataBase = {
        users:[]
    }
}

gulp.task('mockServer', function () {
    gulp.src('.')
        .pipe(webserver({
            port: 3000,
            middleware: function (req, res, next) {
                res.setHeader('Access-Control-Allow-Origin', '*');
                var method = req.method,
                    urlObj = url.parse(req.url),
                    pathname = urlObj.pathname;

                if (method == 'POST') {
                    var postDataStr = '';
                    req.on('data', function (chunk) {
                        postDataStr += chunk;
                    })

                    req.on('end', function () {

                        //1 JSON
                        //2 qs
                        var postDataJson;

                        if (postDataStr.indexOf('{') !== -1 && postDataStr.indexOf('}') !== -1) {//判断是否是json数据还是表单数据
                            postDataJson = JSON.parse(postDataStr) //处理json str
                        } else {
                            postDataJson = qs.parse(postDataStr) //处理表单 str
                        }
                        //得到一个对象 那么就方便了

                        switch(pathname){
                            case '/register':
                            console.log(dataBase)
                            var users = dataBase['users'];
                            res.setHeader('content-type','application/json;charset=utf-8')
                                var newUser = {
                                    user: postDataJson.user,
                                    password:postDataJson.password                               
                                }
                                users.push(newUser);
                                fs.writeFileSync('./dataBase.json',JSON.stringify(dataBase));
                                res.write('{"status":"1"}') // 1代表 注册成功
                           
                            res.end();
                            break;
                            case '/detectionUser':

                            var users = dataBase['users'];
                            var exist = 0;
                            if(users){
                                for(var i = 0,length=users.length; i<length; i++){
                                    if(users[i].user == postDataJson.user){
                                        exist = 1;
                                        break;
                                    }
                                }
                            }

                            res.setHeader('content-type','application/json;charset=utf-8')

                            res.write('{"status":"'+exist+'"}')
                            res.end();

                            break;
                            case '/login':
                            res.end();
                            break;
                            default :
                            res.end();
                            break;
                        }

                        res.end();
                    })


                } else if (method == 'OPTIONS') {
                    res.writeHead(200, {
                        "Content-Type": "application/json",
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET, POST, PUT,DELETE',
                        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
                    });
                    res.end();
                }
            }
        }))
})

gulp.task('default', ['mockServer'])