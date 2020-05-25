// pages/new_detail/new_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topic: {},
    id: '',

    
    openid: '',
    fileID: [],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.getOpenid();

    var that = this;
    var id = options.id;
    that.data.id = id;

    const db = wx.cloud.database();
    db.collection('newcar').doc(id).get({
      success: function (res) {
        // res.data 包含该记录的数据
        that.topic = res.data;


        that.setData({
          topic: that.topic,

        })

        that.changeCheck()

      }
    })
  },

  
 
  // 预览图片
  previewImg: function (e) {
    //获取当前图片的下标
    var index = e.currentTarget.dataset.index;

    wx.previewImage({
      //当前显示图片
      current: this.data.topic.images[index],
      //所有图片
      urls: this.data.topic.images
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


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () { },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () { },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () { },

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

  handleDelete() {
    const id = this.data.id;
    const fileID = this.data.topic.images;
    wx.showModal({
      title: '提示',
      content: '是否确认删除？',
      success: function (res) {
        if (res.confirm) {
          wx.cloud.deleteFile({
            fileList: fileID, // 文件 ID 数组f
            success: res => {
              // handle success
              console.log(res.fileList)
            },
            fail: console.error
          })

          if (id) {
            const db = wx.cloud.database()
            db.collection('newcar').doc(id).remove({
              success: res => {
                wx.redirectTo({
                  url: '../index/home',
                })
                wx.showToast({
                  title: '删除成功',
                })
                this.setData({
                  id: '',
                })

              },
              fail: err => {
                wx.showToast({
                  icon: 'none',
                  title: '删除失败',
                })
                console.error('[数据库] [删除记录] 失败：', err)
              }
            })
          }
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },



})