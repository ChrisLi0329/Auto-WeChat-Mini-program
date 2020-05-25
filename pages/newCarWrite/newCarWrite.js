// pages/sales/sales.js


Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid: '',
    period: '',
    year: '',
    km: '',
    
    monthlyPay: '',
    price: '',
    dp: '',
    images: [],
    user: {},
    //dates:'',
    mode: [],
    
    model: '',
    content: '',
    


    


    multiArray: [['选择品牌', 'Acura', 'Alfa Romeo', 'Audi', 'Aston Martin', 'Bentley', 'BMW', 'Bugatti', 'Buick', 'Cadillac', 'Chevrolet', 'Chrysler', 'Doge', 'Ferrari', 'Ford', 'Fiat', 'GMC', 'Genesis', 'Honda', 'Hyundai', 'Infiniti', 'Jaguar', 'Jeep', 'Kia', 'Lamborghini', 'Land Rover', 'Lincoin', 'Lexus', 'Lotus', 'Maserati', 'Maybach', 'Mazda', 'McLaren', 'Mercedes-AMG', 'Mercedes-Benz', 'MINI', 'Mitsubishi', 'Nissan', 'Porsche', 'Ram', 'Rolls-Royce', 'Scion', 'Smart', 'Subaru', 'Tesla', 'Toyota', 'volkswagen', 'Volvo'], ['选择型号']],
    objectMultiArray: [
      [
        {
          id: 0,
          name: '选择品牌'
        },
        {
          id: 1,
          name: 'Acura'
        },
        {
          id: 2,
          name: 'Alfa Romeo'
        },
        {
          id: 3,
          name: 'Audi'
        },
        {
          id: 4,
          name: 'Aston Martin'
        },
        {
          id: 5,
          name: 'Bentley'
        },
        {
          id: 6,
          name: 'BMW'
        },
        {
          id: 7,
          name: 'Bugatti'
        },
        {
          id: 8,
          name: 'Buick'
        },
        {
          id: 9,
          name: 'Cadillac'
        },
        {
          id: 10,
          name: 'Chevrolet'
        },
        {
          id: 11,
          name: 'Chrysler'
        },
        {
          id: 12,
          name: 'Doge'
        },
        {
          id: 13,
          name: 'Ferrari'
        },
        {
          id: 14,
          name: 'Ford'
        },
        {
          id: 15,
          name: 'Fiat'
        },
        {
          id: 16,
          name: 'GMC'
        },
        {
          id: 17,
          name: 'Genesis'
        },
        {
          id: 18,
          name: 'Honda'
        },
        {
          id: 19,
          name: 'Hyundai'
        },
        {
          id: 20,
          name: 'Infiniti'
        },
        {
          id: 21,
          name: 'Jaguar'
        },
        {
          id: 22,
          name: 'Jeep'
        },
        {
          id: 23,
          name: 'Kia'
        },
        {
          id: 24,
          name: 'Lamborghini'
        },
        {
          id: 25,
          name: 'Land Rover'
        },
        {
          id: 26,
          name: 'Lincoln'
        },
        {
          id: 27,
          name: 'Lexus'
        },
        {
          id: 28,
          name: 'Lotus'
        },
        {
          id: 29,
          name: 'Maserati'
        },
        {
          id: 30,
          name: 'Maybach'
        },
        {
          id: 31,
          name: 'Mazda'
        },
        {
          id: 32,
          name: 'McLaren'
        },
        {
          id: 33,
          name: 'Mercedes-AMG'
        },
        {
          id: 34,
          name: 'Mercedes-Benz'
        },
        {
          id: 35,
          name: 'Mini'
        },
        {
          id: 36,
          name: 'Mitsubishi'
        },
        {
          id: 37,
          name: 'Nissan'
        },
        {
          id: 38,
          name: 'Porsche'
        },
        {
          id: 39,
          name: 'Ram'
        },
        {
          id: 40,
          name: 'Rolls-Royce'
        },
        {
          id: 41,
          name: 'Scion'
        },
        {
          id: 42,
          name: 'Smart'
        },
        {
          id: 43,
          name: 'Subaru'
        },
        {
          id: 44,
          name: 'Tesla'
        },
        {
          id: 45,
          name: 'Toyota'
        },
        {
          id: 46,
          name: 'Volkswagen'
        },
        {
          id: 47,
          name: 'Volvo'
        }
      ], [
        {
          id: 0,
          name: '选择型号'
        }
      ]
    ],
    multiIndex: [0, 0]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getOpenid();
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

  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)


  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  bindMultiPickerChange(e) {
    var that = this
    console.log('picker发送选择改变，携带值为', e.detail.value)
    console.log('picker', this.data.multiArray[0][this.data.multiIndex[0]] + ' ' + this.data.multiArray[1][this.data.multiIndex[1]])
    var model = this.data.multiArray[0][this.data.multiIndex[0]] + '  ' + this.data.multiArray[1][this.data.multiIndex[1]]
    console.log(model)
    //e.detail.value = model
    this.setData({
      multiIndex: e.detail.value,
      model: this.data.multiArray[0][this.data.multiIndex[0]] + '  ' + this.data.multiArray[1][this.data.multiIndex[1]],

    })
  },
  bindMultiPickerColumnChange(e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value)

    const data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    }

    //console.log('picker', this.data.multiIndex[e.detail.value])
    data.multiIndex[e.detail.column] = e.detail.value
    console.log(data.multiIndex[e.detail.column])
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['选择型号']
            break
          case 1:
            data.multiArray[1] = ['NSX', 'MDX', 'RLX', 'RDX', 'TLX', 'ILX']
            break
          case 2:
            data.multiArray[1] = ['Giulia']
            break
          case 3:
            data.multiArray[1] = ['A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'TT', 'R8', 'Q3', 'Q5', 'Q7', 'Q8', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'TTS', 'SQ5', 'RS3', 'RS5', 'TTRS']
            break
          case 4:
            data.multiArray[1] = ['Virage', 'DB9', 'DBS', 'Vanquish', 'Rapide', 'DB11', 'Vantage']
            break
          case 5:
            data.multiArray[1] = ['Bentayga', 'Continental GT']
            break
          case 6:
            data.multiArray[1] = ['1 Series', '2 Series', '3 Series', '4 Series', '5 Series', '6 Series', '7 Series', '8 Series', 'Z Series', 'M Series', 'i Series', 'X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7']
            break
          case 7:
            data.multiArray[1] = ['Countach', 'Veyron Sang Noir']
            break
          case 8:
            data.multiArray[1] = ['Regal', 'LaCrosse', 'Envision', 'Enclave', 'Encore']
            break
          case 9:
            data.multiArray[1] = ['ATS', 'CTS', 'XTS', 'CT6', 'XT4', 'XT5', 'ESCALADE']
            break
          case 10:
            data.multiArray[1] = ['SPARK', 'CRUZE', 'MALIBU', 'IMPALA', 'VOLT', 'BOLT EV', 'CAMARO', 'CORVETTE STINGRAY', 'CORVETTE GRAND SPORT', 'CORVETTE Z06', 'CORVETTE ZR1', 'TRAX', 'EQUINOX', 'BLAZER', 'TRAVERSE', 'TAHOE', 'SUBURBAN', 'COLORADO', 'SILVERADO']
            break
          case 11:
            data.multiArray[1] = ['200', '300', 'Pacifica']
            break
          case 12:
            data.multiArray[1] = ['Dart', 'Charger', 'Challenger', 'Journey', 'Durango', 'Grand Caravan']
            break
          case 13:
            data.multiArray[1] = ['California', 'FF', 'GTC4', '458', '488', 'F12', 'F430', '599', '575']
            break
          case 14:
            data.multiArray[1] = ['Focus', 'Fiesta', 'Fusion', 'Mustang', 'Taurus', 'Ecosport', 'Escape', 'Flex', 'Edge', 'Explorer', 'Expedition', 'Ranger', 'F-150', 'Focus RS', 'Mustang Shelby', 'F-150 Raptor', 'Ford GT']
            break
          case 15:
            data.multiArray[1] = ['124 Spider', '500', '500L', '500X']
            break
          case 16:
            data.multiArray[1] = ['Terrain', 'Acadia', 'Yukon', 'Canyon', 'Sierra']
            break
          case 17:
            data.multiArray[1] = ['G70', 'G80', 'G90']
            break
          case 18:
            data.multiArray[1] = ['Fit', 'Civic', 'Accord', 'Type R', 'HR-V', 'CR-v', 'Passport', 'Pilot', 'Odyssey', 'Ridgeline']
            break
          case 19:
            data.multiArray[1] = ['Santa Fe', 'Sonata', 'Veloster', 'Accent', 'Elantra', 'Tucson']
            break
          case 20:
            data.multiArray[1] = ['Q50', 'Q60', 'Q70', 'QX30', 'QX50', 'QX60', 'QX70', 'QX80']
            break
          case 21:
            data.multiArray[1] = ['F-Pace', 'E-Pace', 'F-Type', 'XE', 'XF', 'XJ']
            break
          case 22:
            data.multiArray[1] = ['Wrangler', 'Cherokee', 'Compass', 'Grand Cherokee', 'Renegade']
            break
          case 23:
            data.multiArray[1] = ['Niro', 'Forte', 'Rio', 'Optima', 'Stinger', 'Sedona', 'Soul', 'Sportage', 'Sorento']
            break
          case 24:
            data.multiArray[1] = ['Urus', 'Huracan', 'Aventador']
            break
          case 25:
            data.multiArray[1] = ['Land Rover', 'Discovery Sport', 'Discovery', 'Ranger ROver Evoque', 'Ranger Rover Velar', 'Ranger Rover Sport', 'Ranger Rover']
            break
          case 26:
            data.multiArray[1] = ['Navigator', 'MKC', 'MKZ', 'MKT', 'Nautilus', 'continental']
            break
          case 27:
            data.multiArray[1] = ['IS', 'RC', 'RCF', 'ES', 'GS', 'GSF', 'LC', 'LS', 'UX', 'NX', 'RX', 'RXL', 'GX', 'LX']
            break
          case 28:
            data.multiArray[1] = ['Evora']
            break
          case 29:
            data.multiArray[1] = ['Ghibli', 'Levante', 'Quattroporte', 'GranTurismo']
            break
          case 30:
            data.multiArray[1] = ['S-Class']
            break
          case 31:
            data.multiArray[1] = ['Mazda 3', 'Mazda 6', 'CX-3', 'CX-5', 'CX-9', 'MX-5']
            break
          case 32:
            data.multiArray[1] = ['600LT', '720S', '570S', '570GT', '540S', '720S', '675LT', '675S', 'P1']
            break
          case 33:
            data.multiArray[1] = ['C-Class', 'E-Class', 'S-Class', 'CLA', 'CLS', 'GT', 'GLA', 'GLC', 'GLE', 'GLS', 'G-Class']
            break
          case 34:
            data.multiArray[1] = ['A-Class', 'B-Class', 'C-Class', 'E-CLass', 'S-Class', 'CLA', 'CLS', 'GT', 'GLA', 'GLC', 'GLE', 'GLS', 'G-CLass']
            break
          case 35:
            data.multiArray[1] = ['Mini', 'Mini Clubman', 'Mini Convertible', 'Mini Countryman']
            break
          case 36:
            data.multiArray[1] = ['Outlander', 'Eclipse', 'RVR', 'Lancer']
            break
          case 37:
            data.multiArray[1] = ['Versa', 'Sentra', 'Altima', 'Maxima', 'Kicks', 'Qashqai', 'Rogue', 'Murano', 'Pathfinder', 'Armada', 'Frontier', 'Titan', '370z', 'GT-R']
            break
          case 38:
            data.multiArray[1] = ['718', '911', 'Panamera', 'Macan', 'Cayenne', 'Mission E']
            break
          case 39:
            data.multiArray[1] = ['1500', '2500', '3500']
            break
          case 40:
            data.multiArray[1] = ['Phantom', 'Cullinan', 'Ghost', 'Wraith', 'Dawn', 'Black Badge']
            break
          case 41:
            data.multiArray[1] = ['xB', 'tC', 'iM', 'xD', 'IQ', 'FR-S']
            break
          case 42:
            data.multiArray[1] = ['Smart fortwo']
            break
          case 43:
            data.multiArray[1] = ['Forester', 'Impreza', 'Legacy', 'Outback', 'WRX & WRX STI', 'BRZ', 'Crosstrek', 'Ascent']
            break
          case 44:
            data.multiArray[1] = ['Model S', 'Model X', 'Model 3']
            break
          case 45:
            data.multiArray[1] = ['Yaris', 'Corolla', '86', 'Prius C', 'Prius', 'Prius V', 'Camry', 'Avalon', 'Sienna', 'C-HR', 'RAV4', 'Highlander', '4Runner', 'Tacoma', 'Tundra']
            break
          case 46:
            data.multiArray[1] = ['Tigun', 'Atlas', 'Jetta', 'Passat', 'Arteon', 'Jetta GLI', 'Golf', 'Beetle', 'Golf GTI', 'Golf R']
            break
          case 47:
            data.multiArray[1] = ['S60', 'S90', 'V60', 'V90', 'XC40', 'XC60', 'XC90']
            break

        }
        data.multiIndex[1] = 0

        break
    }
    console.log(data.multiIndex)
    this.setData(data)

  },
 



  chooseImage: function (event) {
    // 选择图片
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {

        var tempFilePaths = res.tempFilePaths
        for (var i in tempFilePaths) {

          that.data.images = that.data.images.concat(tempFilePaths[i])
        }

        that.setData({
          images: that.data.images,
        })

      },


    })
  },



  removeImg: function (event) {
    var position = event.currentTarget.dataset.index;
    this.data.images.splice(position, 1);
    this.setData({
      images: this.data.images,
    })
  },

  previewImg: function (e) {
    var index = e.currentTarget.dataset.index;
    wx.previewImage({
      current: this.data.images[index],

      urls: this.data.images
    })
  },

  getOpenid() {
    let that = this;
    wx.cloud.callFunction({
      name: 'getOpenid',
      complete: res => {
        console.log('云函数获取到的openid: ', res.result.openId)
        var openid = res.result.openId;
        that.setData({
          openid: openid
        })
      }
    })
  },

  formSubmit: function (e) {
   
    this.data.year = e.detail.value['input-year'];
    this.data.km = e.detail.value['input-km'];
    this.data.period = e.detail.value['input-period']
    this.data.monthlyPay = e.detail.value['input-mPay'];
    this.data.price = e.detail.value['input-price'];
    this.data.dp = e.detail.value['input-dp'];
    this.data.content = e.detail.value['input-content']
    this.data.mode = this.data.model;
    



    let images = this.data.images;
    let imageOk = [];
    wx.showToast({
      icon: "loading",
      title: "上传图片"
    });

    for (let i = 0; i < images.length; i++) {

      let str = images[i];

      var obj = str.lastIndexOf("/");
      var fileName = str.substr(obj + 1);


      wx.cloud.uploadFile({


        cloudPath: 'newCar/' + fileName,

        filePath: images[i], // 小程序临时文件路径

        success: res => {
          console.log(res)
          imageOk.push(res.fileID)

          if (imageOk.length == images.length) {
            console.log(imageOk)
            wx.showLoading({
              title: '上传数据',
            })

            this.saveDataToServer(imageOk)
          }

        },
        complete: function () {
          //隐藏Toast
        }

      })

    }




  },

  saveDataToServer: function (imageOk) {

    var that = this;
    const db = wx.cloud.database();
    const carList = db.collection('newcar')
    db.collection('newcar').add({
      data: {
        count: 1,
        liulan: 1,
        period: that.data.period,
        year: that.data.year,
        km: that.data.km,
        
        mPay: that.data.monthlyPay,
        price: that.data.price,
        dp: that.data.dp,
        images: imageOk,
        mode: that.data.mode,
       
        content: that.data.content,
        


      },
      success: function (res) {
        console.log('success------>' + res)
        
        that.data.period = '';
        that.data.year = '';
        that.data.km = '';
        
        that.data.monthlyPay = '';
        that.data.price = '';
        that.data.dp = '';
        that.data.images = [];
        that.data.mode = [];
        that.data.content = '',


        that.setData({
          images: [],

         
          textYear: '',
          textKm: '',
          returnYear: '',
          textMPay: '',
          price: '',
          textdp: '',
          multiIndex: '',
          
          content: '',
          multiIndex: [],
          
        })

        that.showTipAndSwitchTab();
      },
      complete: function (res) {
        console.log('complete------->' + res)

      }
    })
  },

  showTipAndSwitchTab: function (event) {
    wx.showToast({
      title: '新增记录成功',
    })
    wx.redirectTo({
      url: '../index/home',
    })

    console.log('==========================')
  },


  getTextAreaContent: function (e) {
    this.data.content = e.detail.value
  }

})