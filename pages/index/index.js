//index.js
//获取应用实例
const app = getApp()

Page({

  data: {
    showModal: false
  },

  submit: function () {
    this.setData({
      showModal: true
    })
  },

  preventTouchMove: function () {

  },


  go: function () {
    this.setData({
      showModal: false
    })
  }

})
