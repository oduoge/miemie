Component({
  data: {
    active: 0,
    list: [
      {
        "pagePath": "/pages/home/home",
        "text": "首页",
        "iconPath": "images/home.png",
        "selectedIconPath": "images/home-selected.png"
      },
      {
        "pagePath": "/pages/word/word",
        "text": "单词",
        "iconPath": "images/home.png",
        "selectedIconPath": "images/home-selected.png"
      },
      {
        "pagePath": "/pages/search/search",
        "text": "辞典",
        "iconPath": "images/search.png",
        "selectedIconPath": "images/search-selected.png"
      },
      {
        "pagePath": "/pages/settings/settings",
        "text": "设置",
        "iconPath": "images/settings.png",
        "selectedIconPath": "images/settings-selected.png"
      }
    ]
  },
  attached() {

  },
  methods: {
    onChange(event) {
      let that = this

      const url = that.data.list[ event.detail].pagePath
      console.log(that.data.active)
      wx.switchTab({url})
    },
  }
})