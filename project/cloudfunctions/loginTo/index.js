const rp=require('request-promise')
exports.main=async(event,context)=>{
  var url=`http://127.0.0.1:3000/use/login?uname=${event.uname}&upwd=${event.upwd}`;
  return rp(url).then(res=>{return res;}).catch(err=>{return err;})
}

// 云函数入口文件
// const cloud = require('wx-server-sdk')

// cloud.init()

// // 云函数入口函数
// exports.main = async (event, context) => {
//   const wxContext = cloud.getWXContext()

//   return {
//     event,
//     openid: wxContext.OPENID,
//     appid: wxContext.APPID,
//     unionid: wxContext.UNIONID,
//   }
// }