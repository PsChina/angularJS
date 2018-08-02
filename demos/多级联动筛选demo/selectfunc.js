const serverMessage = {
    "success":true,
    "code":"0",
    "data": {
        "list": [
             {
                "name":"检修电工",
                "select":false,
                "list": [
                     {
                        "name":"检修班组一",
                        "select":false,
						"list":[
							{
								"id":"1",
								"name":"检修-赵工",
                                "role":"E",
                                "select":false,
							},
							{
								"id":"2",
								"name":"检修-钱工",
                                "role":"E",
                                "select":false,
							}
						 ]
                    },
					{
                        name:"检修班组二",
                        "select":false,
						"list":[
							{
								"id":"3",
								"name":"检修-孙工",
                                "role":"E",
                                "select":false,
							},
							{
								"id":"4",
								"name":"检修-李工",
                                "role":"E",
                                "select":false,
							}
						]
					}
                     
                ]
            },
             {
                "name":"运行电工",
                "select":false,
                "list": [
                     {
                        "id":"5",
                        "name":"运行电工NO1",
                        "role":"E",
                        "select":false,
                    },
                     {
                        "id":"6",
                        "name":"运行-张工",
                        "role":"E",
                        "select":false,
                    }
                ]
            }
        ]
    }
}


function addSelectAttr(list){
    if(Array.isArray(list)){
        for(const item of list){
            item.select = false;
            if(item['list']){
                addSelectAttr(item.list)
            }
        }
    }
}

function changeSelectStatus(selectVal,item){
    item.select = !item.select; //改变select状态
    if(item['list']){
        if(Array.isArray(item.list)){
            for(const subItem of item.list){
                changeSelectStatus(item.select,subItem);
            }
        }
    }
    return item
}

function findId (item,selectedItemArr=[]) {
    if(item['id']){
        selectedItemArr.push(item)
    }else{
        if(item['list']){
            for(const subItem of item.list){
                findId(subItem,selectedItemArr);
            }
        }
    }
    return selectedItemArr
}

function filterDidSelect (list) {
    let resultList = [];
    for(const item of list){
        if(item.select){ // select为true 表示已经选择
            resultList = resultList.concat( findId(item,resultList) )
        }else{ // 查看子元素是被选择
            resultList = resultList.concat( filterDidSelect(item['list']?item.list:[]) )
        }
    }
    let finallyItemArr = []
    resultList.forEach((item)=>{ // 数组去重
        let ok = true;
        finallyItemArr.forEach((finallyItem)=>{
            if(finallyItem.id === item.id){
                ok = false;
            }
        })
        if(ok){
            delete item.select;
            finallyItemArr.push(item)
        }
    })
    return finallyItemArr;
}

changeSelectStatus(true,serverMessage.data.list[Math.floor(Math.random()*2)]) // 测试 选择函数

console.log(JSON.stringify(serverMessage)) 

const result = filterDidSelect(serverMessage.data.list) // 测试筛选函数

console.log(result); // 输出结果
