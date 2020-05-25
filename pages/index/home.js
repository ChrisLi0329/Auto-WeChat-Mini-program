// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getOpenid();
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

  },
  gobuy() {
    wx: wx.navigateTo({
      url: '../buy/buy',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  gosale() {
    wx: wx.navigateTo({
      url: '../sales/sales',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  gonewCar() {
    wx: wx.navigateTo({
      url: '../newCar/newCar',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
    
  },

  gorent(){
    wx: wx.navigateTo({
      url: '../rent/rent',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  gocontact() {
    wx: wx.navigateTo({
      url: '../contact/contact',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  gonewCarInput() {
    wx: wx.navigateTo({
      url: '../newCarWrite/newCarWrite',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })

  },
  gorentCarInput() {
    wx: wx.navigateTo({
      url: '../rentCarWrite/rentCarWrite',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })

  },
  getOpenid() {
    let that = this;
    wx.cloud.callFunction({
      name: 'getOpenid',
      complete: res => {
        console.log('云函数获取到的openid: ', res.result.openId)
        var openid = res.result.openId;
        that.setData({
          openid: openid
        })
      }
    })
  },
})