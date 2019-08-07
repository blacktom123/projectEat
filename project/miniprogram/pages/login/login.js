// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      uname:"",
      upwd:""
  },
  onUserNameChange:function(e){//保存input数据
    this.setData({
      uname:e.detail
    })
  },
  onUpwdChange: function (e) {
    this.setData({
      upwd: e.detail
    })
  },
  login:function(){
    wx.request({//发送请求
      url: 'http://127.0.0.1:3000/use/login',
      method:"get",
      data:{
        'uname':this.data.uname,
        "upwd":this.data.upwd
      },
      success:function(res){//将登录保存在globalData中
        console.log(res);
        getApp().globalData.header.Cookie='JSESSIONID'+res.data.userId;
        console.log(getApp().globalData.header);
      }
    })
  },
  register:function(){
    wx.navigateTo({
      url: '/pages/register/register',//跳转到注册
    });
  },
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