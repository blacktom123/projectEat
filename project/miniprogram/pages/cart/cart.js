// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shoppingList:[],
    price:0,
    state:false
  },
  chockedShopping:function(e){
    var j =e.currentTarget.dataset.sid;
    var q=this.data.shoppingList;
    if(q[j].check==true){
      var n = "shoppingList[" + j + "].check"
      this.setData({
        [n]: false
      })
    }else{
      var n = "shoppingList[" + j + "].check"
      this.setData({
        [n]: true
      })
    }
    this.computed();
    console.log(this.data.price);
  },
    change:function(e){
      var t = e.currentTarget.dataset.id;
      if(e.target.dataset.value=="+"){
        var n = "shoppingList["+t+"].num"
        var s = this.data.shoppingList[t].num+1;
        this.setData({
          [n]:s
        })
        this.computed();
        // console.log(this.data.shoppingList);
      } else if (e.target.dataset.value == "-"){
        var n = "shoppingList["+t+"].num"
        var s=this.data.shoppingList[t].num-1;
        this.setData({
          [n]: s
        })
        this.computed();
      }
      if(this.data.shoppingList[t].num==0){
        wx.request({
          url: 'http://127.0.0.1:3000/use/deleteMsg',
          method: 'get',
          data: { mid: this.data.shoppingList[t].mid},
          success:(res)=>{
            wx.showToast({
              title: `${res.data.msg}`,
              icon: 'none'
            })
          }
        })
        var s="shoppingList["+t+"]";
        this.setData({
          [s]:null
        });
        var a=this.data.shoppingList.every((item,index,every)=>{
          return item==null;
        })
        if (a){
          this.setData({
            state:true
          })
        }
      }
    },
    shoppingCart:function(){
      return new Promise(resolve => {
      wx.request({
        url: 'http://127.0.0.1:3000/use/selectMsg',
        method:'get',
        success:(res)=>{
          for (let i = 0; i < res.data.length; i++) {
            res.data[i].num = 1;
            res.data[i].check = true;
          }
          if(res.data!=''){
          this.setData({
            shoppingList:res.data
          })
            this.setData({
              state: false
            })
          }else{
            this.setData({
              state:true
            })
          }
          console.log(res);
          return resolve();
        }
      })
      })
    }
  ,
  computed: function () {
    var q = this.data.shoppingList;
      for (var i = 0, a = 0; i < q.length; i++) {
        if (q[i].check == true) {
          a += (q[i].num * q[i].price);
          var s = a.toFixed(1);
          this.setData({
            price: s
          })
        }
      }
    console.log(123);
  },
  jumpComment: function () {
    wx.switchTab({
      url: '/pages/menu/menu',//跳转到
    });
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
    this.onLoad();
    this.shoppingCart().then(result => {
      this.computed();
    });
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