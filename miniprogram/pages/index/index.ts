// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    iptValue:''
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  onLoad() {
    const that = this
    wx.getClipboardData({
      success (res){
        console.log(res.data)
        that.setData({
          iptValue:res.data
        })
      }
    })
  },
  onInput(e:any){
    const {value} = e.detail
    this.setData({
      iptValue:value
    })
  },
  onConfim(){
    console.log(this.data.iptValue)
  }
})
