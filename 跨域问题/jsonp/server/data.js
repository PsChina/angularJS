// 不在同一域名的js 请使用http-server 启动一个服务 8081
// 数据
const data = {
    list:[
        {
            name:"data1",
            someOther:{}
        },
        {
            name:"data2",
            someOther:{}
        },
        {
            name:"data3",
            someOther:{}
        }
    ]
}

//调用 8080 下的 函数
callBack(data); // 调用callback 函数传递数据 // callback目前是未定义的 但是index里面会定义好
 