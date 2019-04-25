
function radaf(){
    
var rada = echarts.init(document.getElementById('radac'));



var data_year_rang=[2015,2016,2017]
var data_dd = [
    {
        
        'radar_indicator': [{
                name: '未知',
                max: 30000
            }, {
                name: '致命',
                max: 30000
            }, {
                name: '严重',
                max: 30000
            }, {
                name: '次要',
                max: 30000
            }, {
                name: '告警',
                max: 30000
            }, {
                name: '信息',
                max: 30000
            }],
        'trade_range': [20000, 20000, 12000, 15000, 5000, 20000]
    },
    {
        
        'radar_indicator': [{
                name: '未知',
                max: 30000
            }, {
                name: '致命',
                max: 30000
            }, {
                name: '严重',
                max: 30000
            }, {
                name: '次要',
                max: 30000
            }, {
                name: '告警',
                max: 30000
            }, {
                name: '信息',
                max: 30000
            }],
        'trade_range': [28000, 20000, 28000, 15000, 5000, 20000]
    }, {
        
        'radar_indicator': [{
                name: '未知',
                max: 30000
            }, {
                name: '致命',
                max: 30000
            },
            {
                name: '严重',
                max: 30000
            }, {
                name: '次要',
                max: 30000
            },
             {
                name: '告警',
                max: 30000
            },{
                name: '信息',
                max: 30000
            }],
        'trade_range': [28000, 20000, 28000, 15000, 18000,20000, 20000]
    }

]


option = {
    baseOption: {

        title: {
            top: 'center',
            left: 'center',
        },
        timeline: {
            show: false, //是否显示
            left: 10,
            top: 10,
            right: 600,
            autoPlay: true, //自动播放
            playInterval: 2000, //播放间隔
            axisType: 'category',
            inverse: false, //是否反向放置 timeline，反向则首位颠倒过来。
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: { //轴的图形样式
                normal: {
                    color: '#04a5f1'
                },
                emphasis: {
                    color: '#04a5f1'
                }
            },
            label: { //轴的文本标签样式
                normal: {
                    show: true,
                    color: '#04a5f1'
                },
                emphasis: {
                    color: '#04a5f1'
                }

            },
            lineStyle: { //轴线控制
                show: false,
                color: '#ddd'
            },
            checkpointStyle: { //当前选择项的样式

                symbolSize: 0,
                //color: '#04a5f1',
                //borderColor: 'rgba(4, 165, 261, .5)'
            },
            controlStyle: { //控制按钮样式
                show: false,
            },
            data: data_year_rang,

        },

        //backgroundColor:'#333333',
        tooltip: {},
        legend: {
            //data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
        },
        
        series: [{
            name: '',
            type: 'radar',
            areaStyle: {
                normal: {
                    color: '#3399FF'

                }
            },
            itemStyle: {
                color: '#59abe1',
                borderColor: '#59abe1'
            },

        }]
    },

    options: [{
            title: {
                text: data_dd[0].dim_year,
            },
            legend: {
        top: 10,
        orient: 'vertical',
        right: 40,
        itemWidth: 12,
        itemHeight: 12,
        data: ['网络设备','服务器','存储设备'],
        textStyle: {
            color: colorFont
        }
    },
            radar: {
                center: ['40%', '50%'],
        radius: '70%',
            axisLine: {
            lineStyle: {
                color: colorFont,
                opacity: .2
            }
        },
        splitLine: {
            lineStyle: {
                color: '#018EE9',
                opacity: 0.3
            }
        },
        splitArea: {
            areaStyle: {
                color: '#018EE9',
                opacity: 0.1,
                shadowBlur: 45,
                shadowColor: 'rgba(0,0,0,.5)',
                shadowOffsetX: 0,
                shadowOffsetY: 15,
            }
        },
            // shape: 'circle',
            indicator:data_dd[0].radar_indicator
        },
            series: [{
                data: [{
                    value: data_dd[0].trade_range
                }]
            }]
        },

        {
            title: {
                text: data_dd[1].dim_year,
            },
            legend: {
        top: 10,
        orient: 'vertical',
        right: 40,
        itemWidth: 12,
        itemHeight: 12,
        data: ['网络设备','服务器','存储设备'],
        textStyle: {
            color: colorFont
        }
    },
            radar: {
                center: ['40%', '50%'],
        radius: '70%',
                axisLine: {
            lineStyle: {
                color: colorFont,
                opacity: .2
            }
        },
        splitLine: {
            lineStyle: {
                color: '#018EE9',
                opacity: 0.3
            }
        },
        splitArea: {
            areaStyle: {
                color: '#018EE9',
                opacity: 0.1,
                shadowBlur: 45,
                shadowColor: 'rgba(0,0,0,.5)',
                shadowOffsetX: 0,
                shadowOffsetY: 15,
            }
        },
            // shape: 'circle',
            indicator:data_dd[1].radar_indicator
        },
            series: [{
                data: [{
                    value: data_dd[1].trade_range
                }]
            }]
        },
        {
            title: {
                text: data_dd[2].dim_year,
            },
            legend: {
        top: 10,
        orient: 'vertical',
        right: 40,
        itemWidth: 12,
        itemHeight: 12,
        data: ['网络设备','服务器','存储设备'],
        textStyle: {
            color: colorFont
        }
    },
            radar: {
                center: ['40%', '50%'],
        radius: '70%',
                axisLine: {
            lineStyle: {
                color: colorFont,
                opacity: .2
            }
        },
        splitLine: {
            lineStyle: {
                color: '#018EE9',
                opacity: 0.3
            }
        },
        splitArea: {
            areaStyle: {
                color: '#018EE9',
                opacity: 0.1,
                shadowBlur: 45,
                shadowColor: 'rgba(0,0,0,.5)',
                shadowOffsetX: 0,
                shadowOffsetY: 15,
            }
        },
            // shape: 'circle',
            indicator:data_dd[2].radar_indicator
        },
            series: [{
                data: [{
                    value: data_dd[2].trade_range
                }]
            }]
        }


    ]
};

rada.setOption(option);

}
radaf();


/*
var rada_option = {
    legend: {
        top: 10,
        orient: 'vertical',
        right: 40,
        itemWidth: 12,
        itemHeight: 12,
        data: ['网络设备','服务器','存储设备'],
        textStyle: {
            color: colorFont
        }
    },
    radar: {
        center: ['40%', '50%'],
        radius: '70%',
        splitNumber: 8,
        axisLine: {
            lineStyle: {
                color: colorFont,
                opacity: .2
            }
        },
        splitLine: {
            lineStyle: {
                color: '#018EE9',
                opacity: 0.3
            }
        },
        splitArea: {
            areaStyle: {
                color: '#018EE9',
                opacity: 0.1,
                shadowBlur: 45,
                shadowColor: 'rgba(0,0,0,.5)',
                shadowOffsetX: 0,
                shadowOffsetY: 15,
            }
        },
        indicator: [{
            name: '致命',
            max: 6000
        }, {
            name: '未知',
            max: 6000
        }, {
            name: '信息',
            max: 6000
        }, {
            name: '告警',
            max: 6000
        }, {
            name: '次要',
            max: 6000
        }, {
            name: '严重',
            max: 6000
        }]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        symbolSize: 0,
        areaStyle: {
            normal: {
                shadowBlur: 2,
                shadowColor: 'rgba(0,0,0,.2)',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: 0.4
            }
        },
        lineStyle :{
            normal: {
                width: 1,
                opacity: 0.4
            }
        },
        data: [{
            value: [5500, 4000, 4500, 4200, 5500, 4100],
            name: '网络设备',
        }, {
            value: [2500, 5500, 5500, 4100, 4200, 4000],
            name: '服务器',
        }, {
            value: [800, 4200, 5100, 4500, 4000, 4200],
            name: '存储设备',
        }]
    }],
    color: colorArry
};

*/