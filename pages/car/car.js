// pages/car/car.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //   carArray:[]
        // carArray:[
        //     {
        //         goodsId:1,
        //         carImage:"../../image/test.jpg",
        //         carPrice:"169.00",
        //         carName:"木村耀司登山旅行大学生户外情侣双肩背包外带小背包1",
        //         carNum:1,
        //         carShow:true
        //     },
        //     {
        //         goodsId: 1,
        //         carImage: "../../image/test.jpg",
        //         carPrice: "169.00",
        //         carName: "木村耀司登山旅行大学生户外情侣双肩背包外带小背包2",
        //         carNum: 1,
        //         carShow: false
        //     },
        //     {
        //         goodsId: 1,
        //         carImage: "../../image/test.jpg",
        //         carPrice: "169.00",
        //         carName: "木村耀司登山旅行大学生户外情侣双肩背包外带小背包3",
        //         carNum: 1,
        //         carShow: true
        //     }
        // ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var getCardata = wx.getStorageSync("GoodsCarList");
        console.log(getCardata);

        //总价格计算
        var totalData = 0;
        for(var i = 0; i < getCardata.length;i++){
            totalData = totalData + getCardata[i].carPrice * getCardata[i].carNum;
        }


        this.setData({
            totalPrice:totalData,
            carArray: getCardata
        })
    },

    /**
     * 跳转到支付页面
     */

    getPay: function() {
        wx.navigateTo({
            url: '../pay/pay',
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--数量加减
     */
    carReduce: function(options) {
        var that = this;
        var index = options.target.dataset.alphaBeta;
        var Num = that.data.carArray[index].carNum;
        var key = "carArray[" + index + "].carNum";

        //修改存储器参数
        var getCardata = wx.getStorageSync("GoodsCarList");

        var obj = {};
        if(Num <=1 ){
            obj[key] = 1;  
            getCardata[index].carNum = 1;  
        }else{
            Num--;
            obj[key] = Num;
            getCardata[index].carNum = Num;  
        }

        //总价格重新计算
        var totalData = 0;
        for (var i = 0; i < getCardata.length; i++) {
            totalData = totalData + getCardata[i].carPrice * getCardata[i].carNum;
        }
        obj["totalPrice"] = totalData

        wx.setStorageSync("GoodsCarList", getCardata);
       

        that.setData(obj);
    },


    carAdd: function(options) {
        var that = this;
        var index = options.target.dataset.alphaBeta;
        var Num = that.data.carArray[index].carNum + 1;
        var key = "carArray[" + index + "].carNum";
        var obj = {};
        obj[key] = Num;

        //修改存储器参数
        var getCardata = wx.getStorageSync("GoodsCarList");
        getCardata[index].carNum = Num;
        wx.setStorageSync("GoodsCarList", getCardata);

        //总价格重新计算
        var totalData = 0;
        for (var i = 0; i < getCardata.length; i++) {
            totalData = totalData + getCardata[i].carPrice * getCardata[i].carNum;
        }
        obj["totalPrice"] = totalData


        that.setData(obj);
    },
    /**
     * 删除购物车商品
     */
    carRemove:function(options){
        var that = this;
        var index = options.target.dataset.alphaBeta;
        var key = "carArray[" + index + "].carShow";   
        var obj = {};
        obj[key] = false;

        //修改存储器参数
        var getCardata = wx.getStorageSync("GoodsCarList");
        getCardata[index].carShow = false;
        wx.setStorageSync("GoodsCarList", getCardata);

        that.setData(obj);
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})