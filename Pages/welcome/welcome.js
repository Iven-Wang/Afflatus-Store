// Pages/welcome.js
Page({
  getProfile(res){
    this.setData({
      "profile":res.detail.userInfo
    })
  },
  data:{
    "profile":{
      nickName:'欢迎光临冇想法买手店',
      "avatarUrl":'/images/logo.png'
    }
  },


jumpTo: function() {
  wx.switchTab({
    url: '../index/index',
  })
},

tip: function () {
  // //成功
  // wx.showToast({
  //   title: '成功',
  //   icon: 'success',
  //   duration: 2000
  // })
  // //加载中
  // wx.showToast({
  //   title: '加载中',
  //   icon: 'loading',
  //   duration: 10000
  // })
  // setTimeout(function () {
  //   wx.hideToast()
  // }, 2000)

  wx.showModal({
    title: '你当我是兄弟',
    content: '可我当你是儿子呀',
    success: function (res) {
      if (res.confirm) {
        console.log('用户点击确定')
      }
    }
  })
  // wx.showActionSheet({
  //   itemList: ['A', 'B', 'C'],
  //   success: function (res) {
  //     if (!res.cancel) {
  //       console.log(res.tapIndex)
  //     }
  //   }
  // })

},
})

// start: function() {
//   //关闭当前页面，跳转到应用内的某个页面。
//   wx.redirectTo({
//     url: 'Pages/index/index',
//     success: function (res) {
//       // success
//       console.log(成功);
//     },
//     fail: function () {
//       // fail
//       console.log('sksdfksjfksjf');
//     },
//     complete: function () {
//       // complete
//     }
//   })
//   //保留当前页面，跳转到应用内的某个页面，使用wx.navigateBack可以返回到原页面。
//   // wx.navigateTo({
//   //    url: '../toolbar/toolbar',
//   //   success: function(res){
//   //     // success
//   //   },
//   //   fail: function() {
//   //     // fail
//   //   },
//   //   complete: function() {
//   //     // complete
//   //   }
//   // })
//   //使用 wx.navigateTo跳转页面的时候，用如下方法返回页面。
//   // wx.navigateBack({
//   //   delta: 1, // 回退前 delta(默认为1) 页面
//   //   success: function(res){
//   //     // success
//   //   },
//   //   fail: function() {
//   //     // fail
//   //   },
//   //   complete: function() {
//   //     // complete
//   //   }
//   // })
// }