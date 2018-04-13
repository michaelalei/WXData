//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({
    onLaunch: function () {
        qcloud.setLoginUrl(config.service.loginUrl)


        // 展示本地存储能力
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)

        this.login()
        this.getUserInfo()
    },

    //微信登录
    login: function () {
      // 登录
      wx.login({
        success: res => {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
        }
      })
    },

    //获取微信授权及用户信息
    getUserInfo: function () {
      // 获取用户信息
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
            wx.getUserInfo({
              success: res => {
                // 可以将 res 发送给后台解码出 unionId
                this.globalData.userInfo = res.userInfo
                this.globalData.isLogin = true

                // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                // 所以此处加入 callback 以防止这种情况
                if (this.userInfoReadyCallback) {
                  this.userInfoReadyCallback(res)
                }
              }
            })
          }
        }
      })
    },

    getCourseInfo: function () {
      var that = this;

      wx.request({

        url: 'https://850407565.weixuea.net/weapp/demo/course', //仅为示例，并非真实的接口地址

        //url: 'https://brcmzilp.qcloud.la/weapp/demo/course',
        data: {
          x: '',
          y: ''
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {

          this.courseListServer = res.data.rows;

          console.log(this.courseListServer);

        }

      })

    },

    courseListServer: null,

    globalData:
    {
      isLogin: false,
      userInfo: null,
    }
})