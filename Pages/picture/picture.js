// Pages/picture/picture.js
Page({

  /**
   * 页面的初始数据
   */
  data:
    {
    swiperImage:[
      [
        {
          name: "人像",
          imagePath: "/images/swiperImage/img6.jpg"
        },
        {
          name: "人像",
          imagePath: "/images/swiperImage/img7.jpg"
        },
        {
          name: "人像",
          imagePath: "/images/swiperImage/img8.jpg"
        },
        {
          name: "人像",
          imagePath: "/images/swiperImage/img9.jpg"
        },
      ],
      [
        {
          name: "别的高级的",
          imagePath: "/images/swiperImage/img1.jpg"
        },
        {
          name: "别的高级的",
          imagePath: "/images/swiperImage/img4.jpg"
        },
        {
          name: "别的高级的",
          imagePath: "/images/swiperImage/img3.jpg"
        },
      ],
      [
        {
          name: "风光",
          imagePath: "/images/swiperImage/img5.jpg"
        },
        {
          name: "风光",
          imagePath: "/images/swiperImage/img2.jpg"
        },
      ], 
    ],
    currentIndex:1
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
this.setData({
  currentIndex: 0
  // currentIndex: this.data.swiperImage.item.length - 1 
})  
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