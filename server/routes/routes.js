//引入express模块
const express=require('express');
const pool=require('../pool.js');
//创建路由对象
var router=express.Router();

router.get("/login",(req,res)=>{
    //1:参数
    var uname = req.query.uname;
    var upwd = req.query.upwd;
    //1.1:正则表达式验证用户名或密码
    //2:sql
    console.log(uname);
  var sql = "SELECT userId FROM user WHERE userName = ? AND userPwd = ?";
    //3:json
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err)throw err;
        console.log(result);
        if(result.length==0){
           res.send({code:-1,msg:"用户名或密码有误"});
        }else{
           req.session.userId = 
           result[0].userId;
           res.send({code:1,msg:"登录成功",userId:result[0].userId});
        }
    })
  })
  
  router.get("/userRegister",(req,res)=>{
    var $obj=req.query;
    var sql="INSERT INTO user SET ?";
    pool.query(sql,[$obj],function(err,result){
        if(err) throw err;
        console.log(result);
        //判断是否注册成功
        if(result.affectedRows>0){
          res.send({code:1,msg:"注册成功"});
        }else{
          res.send({code:-1,msg:"注册失败"});
        }
      });
  })  
  
  router.get("/productInfo",(req,res)=>{
    var sql="select * from foods";
    pool.query(sql,function(err,result){
      if(err) throw err;
      res.send(result);
    })
  })

  router.get("/addmsg",(req,res)=>{
     var obj=req.query;
     var id=req.query.fid;
      var sql="SELECT *from foods where fid=?";
      pool.query(sql,[id],function(err,result){    
        var obj=result[0];
        var sql="select fid from cart;"
        pool.query(sql,function(err,result){
          if(err) throw err;
          console.log(result);
          var n=result.every((item,index,array)=>{
            console.log(item)
            return item.fid!=id;
          })
      if(n==true){
        var sql="INSERT INTO cart  SET ?";
        pool.query(sql,[obj],function(err,result){
          if(err) throw err;
          if(result.affectedRows>0){
            res.send({code:1,msg:"插入成功"});
          }else{
            res.send({code:-1,msg:"插入失败"});
          }
        })
      }else{
          return res.send({code:-1,msg:"已有该商品"});
          }
        })
      })
  })
  router.get("/selectMsg",(req,res)=>{
    var sql="SELECT *from cart";
    pool.query(sql,function(err,result){
      if(err) throw err;
      if(result.length>0){
        res.send(result);
      }else{
        res.send();
      }
    })
  })
  router.get("/deleteMsg",(req,res)=>{
    var $mid=req.query.mid;
    var sql="DELETE FROM cart where mid=?";
    pool.query(sql,[$mid],function(err,result){
      if(err) throw err;
      if(result.affectedRows>0){
        res.send({code:1,msg:"已取消商品"});
      }
    })
  })
  // router.get("/msgGoOut",(req,res)=>{
  //   var $id=req.query.userId;
  //   var sql="select contents from hs_msg where userId=?";
  //   pool.query(sql,[$id],function(err,result){
  //     if(err) throw err;
  //     if(result.length>0){
  //       res.send(result);
  //     }
  //   })
  // })

  // router.get("/addcollect",(req,res)=>{
    // var obj=req.query;
    // var id=req.query.infoId;
    // console.log(obj);
    // var sql="select infoId from hs_collect;"
    // pool.query(sql,function(err,result){
    //   if(err) throw err;
    //   console.log(result);
    //   var n=result.every((item,index,array)=>{
    //     return item.infoId!=id;
    //   })
    //   console.log(n);
    //   if(n==true){
    //     var sql="INSERT INTO hs_collect  SET ?";
    //       pool.query(sql,[obj],function(err,result){
    //         if(err) throw err;
    //         if(result.affectedRows>0){
    //            res.send({code:1,msg:"插入成功"});
    //         }else{
    //            res.send({code:-1,msg:"插入失败"});
    //         }
    //     })
    //   }else{
    //       return res.send({code:-1,msg:"已有该商品"});
    //   }
    // })
  // })
  // router.get("/msgcollect",(req,res)=>{
  //   var sql="select * from hs_collect";
  //   pool.query(sql,function(err,result){
  //     if(err) throw err;
  //     if(result.length>0){
  //       res.send(result);
  //     }
  //   })
  // })
  
  // router.get("/msgremove",(req,res)=>{
  //   var id=req.query.infoId;
  //   var sql="DELETE FROM hs_collect WHERE infoId=?";
  //   pool.query(sql,[id],function(err,result){
  //     if(err) throw err;
  //     if(result.affectedRows>0){
  //       res.send({code:1,msg:"删除成功"});
  //     }else{
  //       res.send({code:-1,msg:"删除失败"});
  //     }
  //   })
  // })

module.exports=router;