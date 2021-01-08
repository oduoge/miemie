Page({
  data: {
    imgUrl: '/images/fake/joke.png'
  },

  search: e => {
    let content = e.detail.value
    wx.showModal({
      title: '提示',
      content: '对不起，还没这功能',
      showCancel: false
    })
    // wx.request({
    //   url: `https://api.shanbay.com/bdc/search/?word=${content}`,
    //   data: {},
    //   method: 'GET',
    //   success: res => {
    //     const { msg } = res.data
    //     if (msg == "SUCCESS") {
    //       wx.navigateTo({
    //         url: `./detail/detail?content=${content}`
    //       })
    //     } else {
    //       wx.showModal({
    //         title: '提示',
    //         content: '对不起，查询不到该词信息',
    //         showCancel: false
    //       })
    //     }
    //   },
    // })
  },

  help: () => {
    wx.showModal({
      title: '提示',
      content: '输入单词后点击回车键即可查询',
      showCancel: false
    })
  },

  onLoad: function(options) {
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
        } else {

        }
      }
    })
  }
})
