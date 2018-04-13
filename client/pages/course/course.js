// pages/course/course.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    courseList: [
      {
        title: '第一节：数据类型基础',
        value: 1,
        func: 'paidCourse',
        icon: ''
      },
      {
        title: '第二节：数字数据类型',
        value: 2,
        func: 'studyCourse',
        icon: ''
      },
      {
        title: '第三节：文本数据类型',
        value: 3,
        func: 'doneKeyPoint',
        icon: ''
      },
      {
        title: '第四节：日期金额数据类型',
        value: 4,
        func: 'loveCourse',
        icon: ''
      },
      {
        title: '第五节：数据排序',
        value: 5,
        func: 'doneKeyPoint',
        icon: ''
      },
      {
        title: '第六节：数据定位',
        value: 6,
        func: 'doneKeyPoint',
        icon: ''
      },
      {
        title: '第七节：数据搜索',
        value: 7,
        func: 'doneKeyPoint',
        icon: ''
      },
      {
        title: '第八节：数据组合删除',
        value: 8,
        func: 'doneKeyPoint',
        icon: ''
      },
      {
        title: '第九节：数据表建立',
        value: 9,
        func: 'doneKeyPoint',
        icon: ''
      },
      {
        title: '第十节：数组清洗',
        value: 10,
        func: 'doneKeyPoint',
        icon: ''
      },
      {
        title: '第十一节：数据求和SUM',
        value: 10,
        func: 'doneKeyPoint',
        icon: ''
      },
      {
        title: '第十二节：数据统计计数COUNT',
        value: 10,
        func: 'doneKeyPoint',
        icon: ''
      },
      {
        title: '第十三节：数据条件处理if',
        value: 10,
        func: 'doneKeyPoint',
        icon: ''
      },
      {
        title: '第十四节：数据逻辑处理AND',
        value: 10,
        func: 'doneKeyPoint',
        icon: ''
      },
      {
        title: '第十五节：数据逻辑处理OR',
        value: 10,
        func: 'doneKeyPoint',
        icon: ''
      },
      {
        title: '第十六节：数据多列排序',
        value: 10,
        func: 'doneKeyPoint',
        icon: ''
      },
      {
        title: '第十七节：数据透视分析表',
        value: 10,
        func: 'doneKeyPoint',
        icon: ''
      },
      {
        title: '第十八节：数据趋势分析',
        value: 10,
        func: 'doneKeyPoint',
        icon: ''
      },
      {
        title: '第十九节：数据概率分析',
        value: 10,
        func: 'doneKeyPoint',
        icon: ''
      },
      {
        title: '第二十节：数据点状图',
        value: 10,
        func: 'doneKeyPoint',
        icon: ''
      },

    ],

    courseListServer:[],
    icon:""
  },

  tapImage:function()
  {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadData(options)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () 
  {

  },

  //自定义函数
  loadData: function (options)
  {
    var that = this;


    /*
    try {
      var data = wx.getStorageSync('courseList')
      if (data.length!=0) 
      {
        console.log(that.data.courseListServer);
        console.log('res.data');
        this.setData
          ({
            courseListServer: data,
          })
        return;
      }
    } catch (e) {
      // Do something when catch error
    }
    */

    var host = "https://brcmzilp.qcloud.la/"
    var sectionUrl = host + "weapp/demo/section/cid/"+options.cid

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
          courseListServer: td
        })

        that.setData({
          icon:res.data.course.icon
        })

        //console.log(that.data.courseListServer);

        // wx.setStorageSync({
        //   key: 'courseList',
        //   data: that.data.courseListServer,
        // })
      }

    })

  },

  pressTopic: function(e){
    var sid = e.currentTarget.dataset.sid
    console.log("sid="+sid)

    wx.navigateTo({
      url: '../section/section?sid=' + sid,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
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