// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '/images/cadf0c6a206040670088a8f3d19cd66f.jpg',
      '/images/49bfb10aca9e6458dbc9173f18073d83.jpg',
      '/images/75ceda0c5eedd95c93c036f1cff8b20f.jpg',
    ],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  jumpComment: function () {
    wx.switchTab({
      url: '/pages/menu/menu',
    });
  }
  ,
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