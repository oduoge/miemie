// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    imgUrls: [
      '/images/sun.jpg', 
    'https://img01.yzcdn.cn/vant/ipad.jpeg', 
    'https://img01.yzcdn.cn/vant/ipad.jpeg'
    ],
  },

  onChange(event) {
    this.setData({ active: event.detail })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    let that = this
    if (typeof that.getTabBar === 'function' && this.getTabBar()) {
      that.getTabBar().setData({
        active: 0
      })
    }
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