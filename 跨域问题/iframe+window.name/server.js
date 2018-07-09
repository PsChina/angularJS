var express = require('express');
var app = express();

// 定义路由

var router = express.Router();

router.get('/api/get',function(req,res){
    res.send(`<script>
        window.name = '[{"name":"goods1","price":"100"},{"name":"goods2","price":"200"},{"name":"goods3","price":"300"}]';
    </script>`);
})

app.use(router);

var port = process.env.PORT || 8383;

app.listen(port);

console.log('Magic happens on port' + port);