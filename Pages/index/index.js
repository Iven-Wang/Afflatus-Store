// Pages/index.js
Page({
  data: 
  {
    article:[
    {
      name:"我把北邮校徽上的蓝色做成了避孕套，献给西土城路10号的你",
      comment:"嘿嘿嘿嘿",
      imagePath:"/images/articles/byt.png",
      isHighlyRecommoned:"true",
      // url:"https://mp.weixin.qq.com/s/BW9YH0QmOUX3ld0rBLAR3A"
    },
    {
      name:"《中国当代互联网编瞎话速成指南》",
      comment: "本《指南》仅供娱乐",
      imagePath: "/images/articles/xiahua.jpeg",
      isHighlyRecommoned: "true",
    },
    {
      name: "互联网 · 当代社群经济的崛起",
      comment: "一个商业模式，了解其历史、发展与现状，是不是就能预测未来了呀？",
      imagePath: "/images/articles/group.jpeg",
      isHighlyRecommoned: "true",
    },
    ]
  },

  f1:function(event){
    wx.navigateTo({
      // url:'/Pages/detail/detail',
      url: 'https://mp.weixin.qq.com/s/BW9YH0QmOUX3ld0rBLAR3A',
    })
  }

  
})