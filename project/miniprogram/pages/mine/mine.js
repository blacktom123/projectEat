// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      { Imgs1: "/images/address.png", title: "收货地址", Imgs2: "/images/Arrow.png" },
      { Imgs1: "/images/money.png", title: "美食钱包", Imgs2: "/images/Arrow.png" },
      { Imgs1: "/images/coupon.png", title: "优惠券", Imgs2: "/images/Arrow.png" },
      { Imgs1: "/images/invoice.png", title: "发票管理", Imgs2: "/images/Arrow.png" },
      { Imgs1: "/images/Customer-service.png", title: "客户服务", Imgs2: "/images/Arrow.png" }
    ]
  },
  jumpLogin:function(){
    wx.navigateTo({
      url: '/pages/login/login',
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