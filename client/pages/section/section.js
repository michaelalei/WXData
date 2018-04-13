// pages/section.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courseTopic:"",
    icon:"",
    video_url:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    //下载数据
    var sid = options.sid
    console.log("sid = "+sid)


    var host = "https://brcmzilp.qcloud.la/"
    var sectionUrl = host + "weapp/demo/section_detail/sid/" + options.sid

    var that = this
    wx.request({

      url: sectionUrl,
      data: {
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)

        var td = res.data.data

        that.setData({
          courseTopic: td.courseTopic,
          video_url: td.video_url,
          icon:td.icon
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