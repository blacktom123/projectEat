// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:"",
    userName:"",
    password:""
  },
  onUserNameChange:function(e){//设置用户名属性
    this.setData({
      userName:e.detail
    })
  },
  onPhoneChange:function(e){//设置电话属性
    this.setData({
      phone:e.detail
    })
  },
  onPassWordChange:function(e){//设置密码属性
    this.setData({
      password:e.detail
    })
  },
  register:function(){//发送请求注册
    wx.request({
      url: 'http://127.0.0.1:3000/use/userRegister',
      method:"get",
      data:{
        "userName":this.data.userName,
        "userPwd":this.data.password,
        "phone":this.data.phone
      },
      success:function(res){//响应成功,返回结果
        wx.showToast({
          title: '注册成功',
          duration: 1500,
          success: function () { 
            setTimeout(()=>{
              wx.redirectTo({
                url: '/pages/login/login',
              })
            },1500)
          },
        })
      }
    })  
  }
  ,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})