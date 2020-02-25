// pages/common/news/index.js
var call = require("../../../utils/request.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    accountList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    wx.request({
      url: 'http://wandour.top/account/list',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        // accountList = res;
        console.info(res);
        // this.shuffleSuc(res);
        // this.setData({
        //   accountList: res.data
        // })

        var data = res.data
        that.setData({
          accountList: data,
          // showLoading: false
        })


      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    // wx.request({
    //   url: 'http://wandour.top/account/list',
    //   data: '',
    //   header: {},
    //   method: 'GET',
    //   dataType: 'json',
    //   responseType: 'text',
    //   success: function (res) {
    //     // accountList = res;
    //     console.info(res);
    //     this.shuffleSuc(res);
    //     // this.setData({
    //     //   accountList: res.data
    //     // })
    //   },
    //   fail: function (res) { },
    //   complete: function (res) { },
    // })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  shuffleSuc: function(data) {
    var that = this;
    that.setData({
      accountList: data.data
    })
    //我后面测试了一下，直接this.setData也可以，但是因为我在没有使用封装方法的时候
    //this.setData报过错，不能直接用this，所以我在赋值的时候一般都会加上var that = this;
    //这句话算是一个不是习惯的习惯
  }

})