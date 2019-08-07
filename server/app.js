//使用express模块
const express = require('express');
//引入连接池
//引入路由器
const useRouter=require('./routes/routes.js');
//引入body-parser
const bodyParser=require('body-parser');
const session = require("express-session");
const cors = require("cors");

//创建服务器
var server=express();
//2.2:跨域
server.use(cors({
  origin:["http://127.0.0.1:5050",
  "http://localhost:5050",'http://176.18.6.160:5050'],
  credentials:true
}))
//2.3:session
server.use(session({
  secret:"128位字符串",
  resave:true,
  saveUninitialized:true
}))
server.listen(3000);
//使用body-parser中间件，将post请求的数据格式化为对象
server.use( bodyParser.urlencoded({
    extended:false
  }) );
//挂载路由器
server.use('/use',useRouter);
//托管静态资源
server.use(express.static('public'));