function worldmapf(){

var map = echarts.init(document.getElementById('map'));
var geoCoordMap = {
    '上海': [120.4648, 32.2891],
    '尼日利亚': [-4.388361, 11.186148],
    '美国洛杉矶': [-118.24311, 34.052713],
    '香港邦泰': [114.195466, 22.282751],
    '美国芝加哥': [-87.801833, 41.870975],
    '加纳库马西': [-4.62829, 7.72415],
    '英国曼彻斯特': [-1.657222, 51.886863],
    '德国汉堡': [10.01959, 54.38474],
    '哈萨克斯坦阿拉木图': [45.326912, 41.101891],
    '俄罗斯伊尔库茨克': [89.116876, 67.757906],
    '巴西': [-48.678945, -10.493623],
    '埃及达米埃塔': [31.815593, 31.418032],
    '西班牙巴塞罗纳': [2.175129, 41.385064],
    '柬埔寨金边': [104.88659, 11.545469],
    '意大利米兰': [9.189948, 45.46623],
    '乌拉圭蒙得维的亚': [-56.162231, -34.901113],
    '莫桑比克马普托': [32.608571, -25.893473],
    '阿尔及利亚阿尔及尔': [3.054275, 36.753027],
    '阿联酋迪拜': [55.269441, 25.204514],
    '匈牙利布达佩斯': [17.108519, 48.179162],
    '澳大利亚悉尼': [150.993137, -33.675509],
    '美国加州': [-121.910642, 41.38028],
    '澳大利亚墨尔本': [144.999416, -37.781726],
    '墨西哥': [-99.094092, 19.365711],
    '加拿大温哥华': [-123.023921, 49.311753]
};

var wdata = [
    { name: 'Afghanistan', value: 28397.812 },
    { name: 'Angola', value: 19549.124 },
    { name: 'Albania', value: 3150.143 },
    { name: 'United Arab Emirates', value: 8441.537 },
    { name: 'Argentina', value: 40374.224 },
    { name: 'Armenia', value: 2963.496 },
    { name: 'French Southern and Antarctic Lands', value: 268.065 },
    { name: 'Australia', value: 22404.488 },
    { name: 'Austria', value: 8401.924 },
    { name: 'Azerbaijan', value: 9094.718 },
    { name: 'Burundi', value: 9232.753 },
    { name: 'Belgium', value: 10941.288 },
    { name: 'Benin', value: 9509.798 },
    { name: 'Burkina Faso', value: 15540.284 },
    { name: 'Bangladesh', value: 151125.475 },
    { name: 'Bulgaria', value: 7389.175 },
    { name: 'The Bahamas', value: 66402.316 },
    { name: 'Bosnia and Herzegovina', value: 3845.929 },
    { name: 'Belarus', value: 9491.07 },
    { name: 'Belize', value: 308.595 },
    { name: 'Bermuda', value: 64.951 },
    { name: 'Bolivia', value: 716.939 },
    { name: 'Brazil', value: 195210.154 },
    { name: 'Brunei', value: 27.223 },
    { name: 'Bhutan', value: 716.939 },
    { name: 'Botswana', value: 1969.341 },
    { name: 'Central African Republic', value: 4349.921 },
    { name: 'Canada', value: 34126.24 },
    { name: 'Switzerland', value: 7830.534 },
    { name: 'Chile', value: 17150.76 },
    { name: 'China', value: 123000 },
    { name: 'Ivory Coast', value: 60508.978 },
    { name: 'Cameroon', value: 20624.343 },
    { name: 'Democratic Republic of the Congo', value: 62191.161 },
    { name: 'Republic of the Congo', value: 3573.024 },
    { name: 'Colombia', value: 46444.798 },
    { name: 'Costa Rica', value: 4669.685 },
    { name: 'Cuba', value: 11281.768 },
    { name: 'Northern Cyprus', value: 1.468 },
    { name: 'Cyprus', value: 1103.685 },
    { name: 'Czech Republic', value: 10553.701 },
    { name: 'Germany', value: 83017.404 },
    { name: 'Djibouti', value: 834.036 },
    { name: 'Denmark', value: 5550.959 },
    { name: 'Dominican Republic', value: 10016.797 },
    { name: 'Algeria', value: 37062.82 },
    { name: 'Ecuador', value: 15001.072 },
    { name: 'Egypt', value: 78075.705 },
    { name: 'Eritrea', value: 5741.159 },
    { name: 'Spain', value: 46182.038 },
    { name: 'Estonia', value: 1298.533 },
    { name: 'Ethiopia', value: 87095.281 },
    { name: 'Finland', value: 5367.693 },
    { name: 'Fiji', value: 860.559 },
    { name: 'Falkland Islands', value: 49.581 },
    { name: 'France', value: 63230.866 },
    { name: 'Gabon', value: 1556.222 },
    { name: 'United Kingdom', value: 62066.35 },
    { name: 'Georgia', value: 4388.674 },
    { name: 'Ghana', value: 24262.901 },
    { name: 'Guinea', value: 10876.033 },
    { name: 'Gambia', value: 1680.64 },
    { name: 'Guinea Bissau', value: 10876.033 },
    { name: 'Equatorial Guinea', value: 696.167 },
    { name: 'Greece', value: 11109.999 },
    { name: 'Greenland', value: 56.546 },
    { name: 'Guatemala', value: 14341.576 },
    { name: 'French Guiana', value: 231.169 },
    { name: 'Guyana', value: 786.126 },
    { name: 'Honduras', value: 7621.204 },
    { name: 'Croatia', value: 4338.027 },
    { name: 'Haiti', value: 9896.4 },
    { name: 'Hungary', value: 10014.633 },
    { name: 'Indonesia', value: 240676.485 },
    { name: 'India', value: 1205624.648 },
    { name: 'Ireland', value: 4467.561 },
    { name: 'Iran', value: 240676.485 },
    { name: 'Iraq', value: 30962.38 },
    { name: 'Iceland', value: 318.042 },
    { name: 'Israel', value: 7420.368 },
    { name: 'Italy', value: 60508.978 },
    { name: 'Jamaica', value: 2741.485 },
    { name: 'Jordan', value: 6454.554 },
    { name: 'Japan', value: 127352.833 },
    { name: 'Kazakhstan', value: 15921.127 },
    { name: 'Kenya', value: 40909.194 },
    { name: 'Kyrgyzstan', value: 5334.223 },
    { name: 'Cambodia', value: 14364.931 },
    { name: 'South Korea', value: 51452.352 },
    { name: 'Kosovo', value: 97.743 },
    { name: 'Kuwait', value: 2991.58 },
    { name: 'Laos', value: 6395.713 },
    { name: 'Lebanon', value: 4341.092 },
    { name: 'Liberia', value: 3957.99 },
    { name: 'Libya', value: 6040.612 },
    { name: 'Sri Lanka', value: 20758.779 },
    { name: 'Lesotho', value: 2008.921 },
    { name: 'Lithuania', value: 3068.457 },
    { name: 'Luxembourg', value: 507.885 },
    { name: 'Latvia', value: 2090.519 },
    { name: 'Morocco', value: 31642.36 },
    { name: 'Moldova', value: 103.619 },
    { name: 'Madagascar', value: 21079.532 },
    { name: 'Mexico', value: 117886.404 },
    { name: 'Macedonia', value: 507.885 },
    { name: 'Mali', value: 13985.961 },
    { name: 'Myanmar', value: 51931.231 },
    { name: 'Montenegro', value: 620.078 },
    { name: 'Mongolia', value: 2712.738 },
    { name: 'Mozambique', value: 23967.265 },
    { name: 'Mauritania', value: 3609.42 },
    { name: 'Malawi', value: 15013.694 },
    { name: 'Malaysia', value: 28275.835 },
    { name: 'Namibia', value: 2178.967 },
    { name: 'New Caledonia', value: 246.379 },
    { name: 'Niger', value: 15893.746 },
    { name: 'Nigeria', value: 159707.78 },
    { name: 'Nicaragua', value: 5822.209 },
    { name: 'Netherlands', value: 16615.243 },
    { name: 'Norway', value: 4891.251 },
    { name: 'Nepal', value: 26846.016 },
    { name: 'New Zealand', value: 4368.136 },
    { name: 'Oman', value: 2802.768 },
    { name: 'Pakistan', value: 173149.306 },
    { name: 'Panama', value: 3678.128 },
    { name: 'Peru', value: 29262.83 },
    { name: 'Philippines', value: 93444.322 },
    { name: 'Papua New Guinea', value: 6858.945 },
    { name: 'Poland', value: 38198.754 },
    { name: 'Puerto Rico', value: 3709.671 },
    { name: 'North Korea', value: 1.468 },
    { name: 'Portugal', value: 10589.792 },
    { name: 'Paraguay', value: 6459.721 },
    { name: 'Qatar', value: 1749.713 },
    { name: 'Romania', value: 21861.476 },
    { name: 'Russia', value: 21861.476 },
    { name: 'Rwanda', value: 10836.732 },
    { name: 'Western Sahara', value: 514.648 },
    { name: 'Saudi Arabia', value: 27258.387 },
    { name: 'Sudan', value: 35652.002 },
    { name: 'South Sudan', value: 9940.929 },
    { name: 'Senegal', value: 12950.564 },
    { name: 'Solomon Islands', value: 526.447 },
    { name: 'Sierra Leone', value: 5751.976 },
    { name: 'El Salvador', value: 6218.195 },
    { name: 'Somaliland', value: 9636.173 },
    { name: 'Somalia', value: 9636.173 },
    { name: 'Republic of Serbia', value: 3573.024 },
    { name: 'Suriname', value: 524.96 },
    { name: 'Slovakia', value: 5433.437 },
    { name: 'Slovenia', value: 2054.232 },
    { name: 'Sweden', value: 9382.297 },
    { name: 'Swaziland', value: 1193.148 },
    { name: 'Syria', value: 7830.534 },
    { name: 'Chad', value: 11720.781 },
    { name: 'Togo', value: 6306.014 },
    { name: 'Thailand', value: 66402.316 },
    { name: 'Tajikistan', value: 7627.326 },
    { name: 'Turkmenistan', value: 5041.995 },
    { name: 'East Timor', value: 10016.797 },
    { name: 'Trinidad and Tobago', value: 1328.095 },
    { name: 'Tunisia', value: 10631.83 },
    { name: 'Turkey', value: 72137.546 },
    { name: 'United Republic of Tanzania', value: 44973.33 },
    { name: 'Uganda', value: 33987.213 },
    { name: 'Ukraine', value: 46050.22 },
    { name: 'Uruguay', value: 3371.982 },
    { name: 'United States of America', value: 312247.116 },
    { name: 'Uzbekistan', value: 27769.27 },
    { name: 'Venezuela', value: 236.299 },
    { name: 'Vietnam', value: 89047.397 },
    { name: 'Vanuatu', value: 236.299 },
    { name: 'West Bank', value: 13.565 },
    { name: 'Yemen', value: 22763.008 },
    { name: 'South Africa', value: 51452.352 },
    { name: 'Zambia', value: 13216.985 },
    { name: 'Zimbabwe', value: 13076.978 }
];

var BJData = [
    [{
        name: '尼日利亚',
        value: 1500
    }, {
        name: '上海'
    }],
    [{
        name: '美国洛杉矶',
        value: 1500
    }, {
        name: '上海'
    }],
    [{
        name: '香港邦泰',
        value: 1500
    }, {
        name: '上海'
    }],
    [{
        name: '美国芝加哥',
        value: 1500
    }, {
        name: '上海'
    }],
    [{
        name: '加纳库马西',
        value: 1500
    }, {
        name: '上海'
    }],
    [{
        name: '英国曼彻斯特',
        value: 0
    }, {
        name: '上海'
    }],
    [{
        name: '德国汉堡',
        value: 0
    }, {
        name: '上海'
    }],
    [{
        name: '哈萨克斯坦阿拉木图',
        value: 0
    }, {
        name: '上海'
    }],
    [{
        name: '俄罗斯伊尔库茨克',
        value: 0
    }, {
        name: '上海'
    }],
    [{
        name: '巴西',
        value: 0
    }, {
        name: '上海'
    }],
    [{
        name: '埃及达米埃塔',
        value: 0
    }, {
        name: '上海'
    }],
    [{
        name: '西班牙巴塞罗纳',
        value: 0
    }, {
        name: '上海'
    }],
    [{
        name: '柬埔寨金边',
        value: 0
    }, {
        name: '上海'
    }],
    [{
        name: '意大利米兰',
        value: 4500
    }, {
        name: '上海'
    }],
    [{
        name: '乌拉圭蒙得维的亚',
        value: 3000
    }, {
        name: '上海'
    }],
    [{
        name: '莫桑比克马普托',
        value: 3000
    }, {
        name: '上海'
    }],
    [{
        name: '阿尔及利亚阿尔及尔',
        value: 4500
    }, {
        name: '上海'
    }],
    [{
        name: '阿联酋迪拜',
        value: 4500
    }, {
        name: '上海'
    }],
    [{
        name: '匈牙利布达佩斯',
        value: 1500
    }, {
        name: '上海'
    }],
    [{
        name: '澳大利亚悉尼',
        value: 1500
    }, {
        name: '上海'
    }],
    [{
        name: '美国加州',
        value: 1500
    }, {
        name: '上海'
    }],
    [{
        name: '澳大利亚墨尔本',
        value: 1500
    }, {
        name: '上海'
    }],
    [{
        name: '墨西哥',
        value: 1500
    }, {
        name: '上海'
    }],
    [{
        name: '加拿大温哥华',
        value: 1500
    }, {
        name: '上海'
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
var series = [];
[
    ['上海', BJData]
].forEach(function(item, i) {
    series.push(
        {
            type: 'lines',
            zlevel: 2,
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

map_option = {
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
        map: 'world',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true, //是否允许缩放
        layoutCenter: ['47%', '55%'], //地图位置
        layoutSize: "150%",
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
    series: series
};

var counts = map_option.series[0].data.length; //获取所有闪动圆环数量
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

map.setOption(map_option);
}

worldmapf();




