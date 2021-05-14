const baidu = require('../../utils/api/baidu.js')
Page({
  data: {
    imgUrl: '/images/fake/joke.png',
    option1: [],
    option2: [],
    value1: 'en',
    value2: 'zh',
  },

  search: function(e) {
    let content = e.detail.value
    wx.showModal({
      title: '提示',
      content: '对不起，还没这功能',
      showCancel: false
    })
  },

  help: () => {
    wx.showModal({
      title: '提示',
      content: '输入单词后点击回车键即可查询',
      showCancel: false
    })
  },

  onLoad: function(options) {
    this.initImage()
    this.initLangMenu()
  },

  initImage: function (){
    let url = wx.getStorageSync('searchImageUrl')
    if (url) {
      this.setData({
        imgUrl: url
      })
    } else {
      wx.request({
        url: 'https://api.ixiaowai.cn/gqapi/gqapi.php?return=json',
        data: {},
        method: 'GET',
        success: res => {
          console.log(res.data)
          if ('200' == res.data.code) {
            this.setData({
              imgUrl: res.data.imgurl
            })
            wx.setStorage({
              key: 'searchImageUrl',
              data: res.data.imgurl
            })
          }
        }
      })
    }
  },
  
  initLangMenu: function() {
    let op1 = []
    for (let item in baidu.commonLang) {
      op1.push({
        text: item,
        value: baidu.commonLang[item]
      })
    }
    console.log(op1)
    this.setData({
      option1: op1,
      option2: op1
    })
  },
  onShow() {
  }
})
