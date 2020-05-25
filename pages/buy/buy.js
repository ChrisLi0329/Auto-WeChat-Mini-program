// pages/buy/buy.js

Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    page: 0,
    pageSize: 5000000,
    totalCount: 0,
    topics:{},
    images:[],
    liulan: null,
    typeList:[
      { 'num': '全部' },
      { 'num': '实用经济' },
      { 'num': '中高端型' },
      { 'num': '性能跑车' },
      { 'num': 'suv' }
    ],
    idxT: 0,

    dpList:[
      { 'num': '全部' },
      { 'num': '$5k以内' },
      { 'num': '$5-10k' },
      { 'num': '$10-15k' },
      { 'num': '$15k以上' }
    ],
    idxDP:0,

    rmList:[
      { 'num': '全部' },
      { 'num': '12月内' },
      { 'num': '12-18月' },
      { 'num': '18-24月' },
      { 'num': '24月以上' }
    ],
    idxRM:0,
  },

  goTypeIndex(e) {
    let index = e.currentTarget.dataset.index;
    // console.log('每个index',index)
    this.setData({
      idxT: index
    })
  },
  goDPIndex(e) {
    let index = e.currentTarget.dataset.index;
    // console.log('每个index',index)
    this.setData({
      idxDP: index
    })
  },
  goRMIndex(e) {
    let index = e.currentTarget.dataset.index;
    // console.log('每个index',index)
    this.setData({
      idxRM: index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData(this.data.page);
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
    wx.showNavigationBarLoading() //在标题栏中显示加载
    console.log('pulldown');
    this.getData(this.data.page);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this;
    var temp = [];
    // 获取后面十条
    console.log("length---->" + this.data.topics.length);
    console.log("count--->" + this.data.totalCount);
    if (this.data.topics.length < this.data.totalCount) {
      try {
        const db = wx.cloud.database();
        db.collection('carList')
          .skip(5)
          .limit(that.data.pageSize) // 限制返回数量为 10 条
          //.orderBy('date', 'desc')
          .get({
            success: function (res) {
              // res.data 是包含以上定义的两条记录的数组
              if (res.data.length > 0) {
                for (var i = 0; i < res.data.length; i++) {
                  var tempTopic = res.data[i];
                  console.log(tempTopic);
                  temp.push(tempTopic);
                }

                var totalTopic = {};
                totalTopic = that.data.topics.concat(temp);

                console.log(totalTopic);
                that.setData({
                  topics: totalTopic,
                })
              } else {
                wx.showToast({
                  title: '没有更多数据了',
                })
              }


            },
            fail: function (event) {
              console.log("======" + event);
            }
          })
      } catch (e) {
        console.error(e);
      }
    } else {
      wx.showToast({
        title: '没有更多数据了',
      })
    }

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  
  getData: function (page) {
    var that = this;
    console.log("page--->" + page);
    const db = wx.cloud.database();
    // 获取总数
    db.collection('carList').count({
      success: function (res) {
        that.data.totalCount = res.total;
      }
    })
    // 获取前十条
    try {
      db.collection('carList')
        
        .limit(that.data.pageSize) // 限制返回数量为 10 条
        //.orderBy('date', 'desc')
        .get({
          success: function (res) {
            // res.data 是包含以上定义的两条记录的数组
            // console.log(res.data)
            that.data.topics = res.data;
            that.setData({
              topics: that.data.topics,
            })
            
            //that.downloadImages(topic.images)
            wx.hideNavigationBarLoading();//隐藏加载
            wx.stopPullDownRefresh();
            
          },
          fail: function (event) {
            wx.hideNavigationBarLoading();//隐藏加载
            wx.stopPullDownRefresh();
            console.log("======" + event);
          }
        })
    } catch (e) {
      wx.hideNavigationBarLoading();//隐藏加载
      wx.stopPullDownRefresh();
      console.error(e);
    }
  },

/*
  downloadImages: function (images) {
    var that = this
      var urls = []
      for (let i = 0; i < images.length; i++) {
        wx.cloud.downloadFile({
          fileID: images[i],
          success: res => {
            // get temp file path
            console.log(res.tempFilePath)
            urls.push(res.tempFilePath)
            if (urls.length == images.length) {
              console.log(urls)
              that.setData({
                images: urls,
                imagesLoaded: true
              })
              
            }
          }
          
        })

      }
    
   
  },
  */
  /**
   * item 点击
   */
  goToDetail: function (e) {
    var id = e.currentTarget.dataset.topicid;
    const db = wx.cloud.database()
    const liulan1 = this.data.liulan+Math.floor(Math.random()*10)
    db.collection('carList').doc(id).update({
      data: {
        // 表示指示数据库将字段自增 10
        liulan: liulan1
      },
      success:res=> {
        this.setData({
          liulan: liulan1,
          id:''
        })
      }
    })
    console.log(id);
    wx.navigateTo({
      url: "../detail/detail?id=" + id
    })
  },
  
})