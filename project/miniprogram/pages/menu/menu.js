// pages/menu/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {title:'港式烧饭'},
      {title:"港式汤面"},
      {title:"港式饮品"}
    ],
    sflist:[],
    tmlist:[],
    yplist:[],
    productList:[],
    num:"0",
    choose:"0"
  },
    city:function(){
      wx.navigateTo({
        url: '/pages/city/city',
      });
    },
  addDetail:function(e){
    wx.request({
      url: 'http://127.0.0.1:3000/use/addmsg',
      method:'get',
      data:{
        fid:e.currentTarget.dataset.id
      },
      success:((res)=>{
        console.log(res);
        if(res.data.code==-1){
        wx.showToast({
          title: '存在该商品',
          icon:'none',
        })
        }else{
          wx.showToast({
            title: '已加入购物车',
            icon: 'none',
          })
        }
      })
    })
  },
  getProductList: function () {
    wx.request({
      url: 'http://127.0.0.1:3000/use/productInfo',
      method:"get",
      success:(res)=>{
        // this.setData({
        //   productList:res.data
        // })
        // console.log(res.data);
        var msarr=res.data;
        var list1 = [];
        var list2 = [];
        var list3 = [];
        for(var i=0;i<msarr.length;i++){
          if(msarr[i].typeName == "港式烧饭"){
            list1.push(msarr[i])
          } else if (msarr[i].typeName == "港式汤面") {
            list2.push(msarr[i])
          } else if (msarr[i].typeName == "港式饮品") {
            list3.push(msarr[i])
          }
        }
        this.setData({
          sflist: list1,
          tmlist: list2,
          yplist: list3
        })
      }
    })    
  },
  onPageScroll: function (e) {
    this.setData({
      'scroll_top': e.scrollTop
    })
    if (this.data.scroll_top < 600){
      this.setData({
        choose: '0'
      })
    }else if (this.data.scroll_top >= 600 && this.data.scroll_top<829){
      this.setData({
        choose:'1'
      })
    }else if(this.data.scroll_top==829){
      this.setData({
        choose: '2'
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getProductList();
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