Component({
  data: {
    active: 0,
    list: [
      {
        "pagePath": "/pages/home/home",
        "text": "首页",
        "iconPath": "images/home.png",
        "selectedIconPath": "images/home-selected.png",
        "icon": "wap-home"
      },
      {
        "pagePath": "/pages/word/word",
        "text": "单词",
        "iconPath": "images/home.png",
        "selectedIconPath": "images/home-selected.png",
        "icon": "search"
      },
      {
        "pagePath": "/pages/card/card",
        "text": "卡包",
        "iconPath": "images/search.png",
        "selectedIconPath": "images/search-selected.png",
        "icon": "card"
      },
      {
        "pagePath": "/pages/settings/settings",
        "text": "我的",
        "iconPath": "images/settings.png",
        "selectedIconPath": "images/settings-selected.png",
        "icon": "manager"
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