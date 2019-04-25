function chinaMap(){

var map = echarts.init(document.getElementById('map'));
var myMounth = '一月';
var myHosName = '北京市';
  
var option = null;

var geoCoordMap = {
      '安徽省': [117.17, 31.52],
      '北京市': [116.24, 39.55],
      '重庆市': [106.54, 29.59],
      '福建省': [119.18, 26.05],
      '甘肃省': [103.51, 36.04],
      '广东省': [113.14, 23.08],
      '广西壮族自治区': [108.19, 22.48],
      '贵州省': [106.42, 26.35],
      '海南省': [110.20, 20.02],
      '河北省': [114.30, 38.02],
      '河南省': [113.40, 34.46],
      '黑龙江省': [128.36, 45.44],
      '湖北省': [112.27, 30.15],
      '湖南省': [112.59, 28.12],
      '吉林省': [125.19, 43.54],
      '江苏省': [118.46, 32.03],
      '江西省': [115.55, 28.40],
      '辽宁省': [123.25, 41.48],
      '内蒙古': [108.41, 40.48],
      '宁夏回族自治区': [106.16, 38.27],
      '青海省': [101.48, 36.38],
      '山东省': [118.00, 36.40],
      '山西省': [112.33, 37.54],
      '陕西省': [108.57, 34.17],
      '上海市': [121.29, 31.14],
      '海南': [108.77, 19.10],
      '四川省': [104.04, 30.40],
      '天津市': [117.12, 39.02],
      '西藏自治区': [91.08, 29.39],
      '新疆维吾尔自治区': [87.36, 43.45],
      '云南省': [102.42, 25.04],
      '浙江省': [120.10, 30.16],
      '澳门': [115.07, 21.33],
      '台湾省': [121.21, 23.53]
  };

  var BJData = [
      [{
          name: '上海市',
          value: 1500
      }, {
          name: '北京市'
      }],
      [{
          name: '广东省',
          value: 1500
      }, {
         name: '北京市'
      }],
      [{
          name: '辽宁省',
          value: 1500
      }, {
          name: '北京市'
      }],
      [{
          name: '湖北省',
          value: 1500
      }, {
          name: '北京市'
      }],
      [{
          name: '内蒙古',
          value: 1500
      }, {
          name: '北京市'
      }],
      [{
          name: '江苏省',
          value: 4500
      }, {
          name: '北京市'
      }],
      [{ 
		  name: '新疆维吾尔自治区',
          value: 70
      }, {
          name: '北京市'
      }],
      [{
		  name: '四川省',
          value: 4500
      }, {
          name: '北京市'
      }],
      [{
		  name: '云南省',
          value: 4500
      }, {
           name: '北京市'
      }],
      [{
		  name: '黑龙江省',
          value: 0
      }, {
          name: '北京市'
      }],
      [{
		  name: '甘肃省',
          value: 0
      }, {
           name: '北京市'
      }],
      [{
		  name: '西藏自治区',
          value: 0
      }, {
          name: '北京市'
      }]
  ];


var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push([{
                coord: fromCoord,
                value: dataItem[0].value
            }, {
                coord: toCoord,
            }]);
        }
    }
    return res;
};

var color = ['#a6c84c', '#ffa022', '#46bee9'];
var mySeries = [];
  [
      [myHosName, BJData]
  ].forEach(function(item, i) {
      mySeries.push({ //线
          name: item[0],
          type: 'lines',
          zlevel: 1,
          effect: {
              show: true,
              period: 4, //箭头指向速度，值越小速度越快
              trailLength: 0.1, //特效尾迹长度[0,1]值越大，尾迹越长重
              symbol: 'circle', //箭头图标
              symbolSize: 5, //图标大小
          },
          lineStyle: {
                normal: {
                    width: 0.3, //尾迹线条宽度
                    opacity: 0.3, //尾迹线条透明度
                    curveness: .5 //尾迹线条曲直度
                }
          },
          data: convertData(item[1])
      }, 
      {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: { //涟漪特效
                period: 4, //动画时间，值越小速度越快
                brushType: 'stroke', //波纹绘制方式 stroke, fill
                scale: 5 //波纹圆环最大限制，值越大波纹越大
            },
            label: {
                normal: {
                    show: true,
                    position: 'right', //显示位置
                    offset: [5, 0], //偏移设置
                    formatter: '{b}', //圆环显示文字
					textStyle: {
						fontSize:'1rem'
                    }
                },
                emphasis: {
                    show: true
                }
            },
            symbol: 'circle',
            symbolSize: function(val) {
                return 3 + val[2] / 1000; //圆环大小
            },
            itemStyle: {
                normal: {
                    show: false,
                    color: '#f00'
                }
            },
            data: item[1].map(function(dataItem) {
                return {
                    name: dataItem[0].name,
                    value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                };
            }),
        },
        {
            type: 'scatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                period: 4,
                brushType: 'stroke',
                scale: 4
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    //offset:[5, 0],
                    color: '#00ffff',
                    formatter: '{b}',
                    textStyle: {
                        color: "#00ffff"
                    }
                },
                emphasis: {
                    show: true
                }
            },
            symbol: 'pin',
            symbolSize: 40,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#9966cc'
                }
            },
            data: [{
                name: item[0],
                value: geoCoordMap[item[0]].concat([100]),
            }],
        }


      );
  });

  option = {
      backgroundColor: '',
      title: {
        text: '',
        left: 'center',
        textStyle: {
            color: '#fff',
            fontSize: 24
        },
        padding: [20, 20, 20, 20]
      },
      tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(0,0,0,1)',
        borderColor: 'rgba(255,255,255,0.5)',
		borderWidth:3,
        showDelay: 0,
        hideDelay: 0,
        enterable: true,
        transitionDuration: 0,
        extraCssText: 'z-index:100',
        formatter: function(params, ticket, callback) {
            //根据业务自己拓展要显示的内容
            var res = "";
            var name = params.name;
            var value = params.value[params.seriesIndex + 1];
            res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
            return res;
        }
      },
      visualMap: { //图例值控制
        min: 0,
        max: 4500,
        calculable: true,
        show: true,
		left:"25%",                                                                                            
        bottom:"10%",
        color: ['#ff0000','#FFC400','#00ffff','#00ffff'],
        textStyle: {
            color: '#fff'
        }
      },
      geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true, //是否允许缩放
        layoutCenter: ['50%', '45%'], //地图位置
        layoutSize: "120%",
        itemStyle: {
			 normal: {
                   borderWidth: 1,
                   color: '#022257', //地图背景色
                   borderColor: '#23A7E8' //省市边界线
				  
             },
			 emphasis: {
				 borderWidth:4,
                 color: '#274D8B', //地图背景色
            }
             
        }
      },
      series: mySeries
  };

var counts = option.series[0].data.length; //获取所有闪动圆环数量
var dataIndex = 0;
//让圆环的提示框自动触发轮播显示
function autoHoverTip() {
    for (var i = 0; i < counts; i++) {
        (function(i) {
            ts = setTimeout(function() {
                map.dispatchAction({
                    type: 'showTip',
                    seriesIndex: 1,
                    dataIndex: i
                });
            }, 5000 * i);
        })(i);
    }
}

setTimeout(function() {
    autoHoverTip();
    tv = setInterval(autoHoverTip, counts * 1000);
}, 500);


  
map.setOption(option, true);
 

  window.onresize = function() {
      map.resize();
  }




}

chinaMap();