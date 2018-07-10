// pages/pay/pay.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var getCardata = wx.getStorageSync("GoodsCarList");
        console.log(getCardata);

        //总价格计算
        var totalData = 0;
        for (var i = 0; i < getCardata.length; i++) {
            totalData = totalData + getCardata[i].carPrice * getCardata[i].carNum;
        }


        this.setData({
            totalPrice: totalData,
            carArray: getCardata
        })
    },
    /**
     * 前往支付
     */
    Addpay: function () {
        wx.navigateTo({
            url: '../request-payment/request-payment',
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