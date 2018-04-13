// pages/happy/happy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //课程高度
    mainCourseHeight:330*(4/2),

    //课程列表
    coursrList:[]
  },
  
  loadFuture: function ()
  {
    wx.navigateTo({
      url: '../../pages/future/future',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  loadAd: function()
  {

    //wx.switchTab({
    //  url: '../../pages/me/me',
    //})

    wx.navigateTo({
      url: '../../pages/happy/ad/ad',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  //进入课程页面
  gotoCourse:function(courseID)
  {
    wx.navigateTo({
      url: '../../pages/course/course',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  gotoClassOne:function(e)
  {
    var cid = e.currentTarget.dataset.cid
    console.log(cid)


    wx.navigateTo({
      url: '../../pages/course/course?cid='+cid,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
    var host = "https://brcmzilp.qcloud.la/"
    var courseUrl = host +"weapp/demo/course"

    //下载数据
    //url: https://brcmzilp.qcloud.la/weapp/demo/course

    var self = this
    wx.request({

      url: courseUrl,
      data: {
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {

        console.log(res.data);
        var td = res.data.data

        self.setData({
          courseList:td
        })

      }

    })

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