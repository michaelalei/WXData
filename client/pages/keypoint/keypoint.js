// pages/keypoint/keypoint.js
Page({

  /**
   * 页面的初始数据
   */
  data: 
  {
    isShowRedDot:false,
    maxHeight:500,
    le : 500 ,
    datas : [
      {
        img: '../../img/SPSS.png',
        title: '数据统计方法一',
        date: ''
      },
      {
        img: '../../img/python基础.png',
        title: '大数据处理爬虫数据',
        date: ''
      },
      {
        img: '../../img/python中级.png',
        title: '人工智能算法入门',
        date: ''
      },
      {
        img: '../../img/SPSS.png',
        title: '数据统计方法二',
        date: ''
      },
      {
        img: '../../img/python基础.png',
        title: '大数据处理数据解析',
        date: ''
      },
      {
        img: '../../img/python中级.png',
        title: '人工智能算法基础',
        date: ''
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var datas = [
      {
        img: '../../img/01.jpg',
        title: 'EXCEL实战技能',
        date: ''
      },
      {
        img: '../../img/01.jpg',
        title: 'EXCEL实战技能',
        date: ''
      },
      {
        img: '../../img/01.jpg',
        title: 'EXCEL实战技能',
        date: ''
      },
      {
        img: '../../img/01.jpg',
        title: 'EXCEL实战技能',
        date: ''
      },
      {
        img: '../../img/01.jpg',
        title: 'EXCEL实战技能',
        date: ''
      },
      {
        img: '../../img/01.jpg',
        title: 'EXCEL实战技能',
        date: ''
      },
    ]

    this.setData
      ({
        maxHeight: datas.length * 500
      })
  },

  gotoClassOne:function()
  {

  },

  testRedDot:function()
  {
    if(this.data.isShowRedDot)
    {
      wx.hideTabBarRedDot({
        index: 1,
      });
    }
    else
    {
      wx.showTabBarRedDot({
        index: 1,
      });
    }

    this.data.isShowRedDot = !this.data.isShowRedDot;
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function ()
   {

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