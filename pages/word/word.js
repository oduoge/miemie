const list = require('../../data/word-list.js')
// const vocList = require('../../data/vocabulary.js')
const innerAudioContext = wx.createInnerAudioContext()

Page({
  data: {
    content: null,
    pron: null,
    definition: null,
    audioUrl: null,
    worldListMax: 999,
    vocListMax: 12346,
    showNot: false,
  },

  onLoad: function(options) {
    //从本地缓存单词表选取第一个单词
    let that = this;
    console.log(that.data)
    var idx = Math.floor(Math.random() * this.data.worldListMax) + 1
    var word = list.wordList[idx]
    console.log("ehllo")
    this.setData({
      content: word.content,
      pron: word.pron,
      definition: word.definition,
      audioUrl: `http://dict.youdao.com/dictvoice?audio=${word.content}`,
    })
  },

  show: function(option) {
    let that = this
    let mshowNot = !that.data.showNot
    console.log(mshowNot)
    this.setData({
      showNot: mshowNot
    })


  },

  onShow() {
    let that = this
    if (typeof that.getTabBar === 'function' && this.getTabBar()) {
      that.getTabBar().setData({
        active: 1
      })
    }
  },

  next: function(options) {
    this.setData({
      showNot: false
    })

    const { worldListMax, content, audioUrl } = this.data

    // 从vocabulary.js中选取下一个单词
    let idx = Math.floor(Math.random() * worldListMax) + 1
    
    console.log(idx)
    console.log(list.wordList.length)
    this.setData({
      content: list.wordList[idx].content,
      audioUrl: `http://dict.youdao.com/dictvoice?audio=${list.wordList[idx].content}`,
      pron: list.wordList[idx].pron,
      definition: list.wordList[idx].definition
    })
    innerAudioContext.src = this.audioUrl
    console.log(content)
    // wx.request({
    //   url: `https://api.shanbay.com/bdc/search/?word=${content}`,
    //   data: {},
    //   method: 'GET',
    //   success: res => {
    //     console.log(res)
    //     const data = res.data.data

    //     this.setData({
    //       content: data.content,
    //       audioUrl: data.us_audio,
    //       pron: data.pron,
    //       definition: data.definition
    //     })

    //     innerAudioContext.src = audioUrl
    //   }
    // })
  },

  read: function(){
    if (this.data.audioUrl) {
      console.log(this.data.audioUrl)
      innerAudioContext.src = this.data.audioUrl
      innerAudioContext.play()
    }
  }
})
