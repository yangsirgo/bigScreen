function shuangzhuf(){

var shuangzhu = echarts.init(document.getElementById('shuangzhu'));

var myData = ['', '', '', '', '', '', ''];

var databeast = {
    1: [389, 259, 262, 324, 232, 176, 196],
    2: [111, 315, 139, 375, 204, 352, 163],
    3: [227, 210, 328, 292, 241, 110, 130],
    4: [100, 350, 300, 250, 200, 150, 100],
    5: [280, 128, 255, 254, 313, 143, 360],
    6: [121, 388, 233, 309, 133, 308, 297],
    7: [200, 350, 300, 250, 200, 150, 100],
    8: [380, 129, 173, 101, 310, 393, 386],
    9: [363, 396, 388, 108, 325, 120, 180],
    10: [300, 350, 300, 250, 200, 150, 100],
    11: [100, 350, 300, 250, 200, 150, 100],
    12: [280, 128, 255, 254, 313, 143, 360],

};
var databeauty = {
    1: [121, 388, 233, 309, 133, 308, 297],
    2: [200, 350, 300, 250, 200, 150, 100],
    3: [380, 129, 173, 101, 310, 393, 386],
    4: [363, 396, 388, 108, 325, 120, 180],
    5: [300, 350, 300, 250, 200, 150, 100],
    6: [100, 350, 300, 250, 200, 150, 100],
    7: [280, 128, 255, 254, 313, 143, 360],
    8: [389, 259, 262, 324, 232, 176, 196],
    9: [111, 315, 139, 375, 204, 352, 163],
    10: [227, 210, 328, 292, 241, 110, 130],
    11: [100, 350, 300, 250, 200, 150, 100],
    12: [280, 128, 255, 254, 313, 143, 360],

};
var timeLineData = [1, 2, 3, 4, 5, 6, 7];

option = {
    baseOption: {
        backgroundColor: '',
        timeline: {
            show: true,
            axisType: 'category',
            tooltip: {
                show: true,
                formatter: function(params) {
                    console.log(params);
                    return params.name + '月份数据统计';
                }
            },
            autoPlay: true,
            currentIndex: 6,
            playInterval: 1000,
            label: {
                normal: {
                    show: true,
                    color:'#fff',
                    interval: 'auto',
                    formatter: '{value}月',
                },
            },
            data: [],
        },
        legend: {
            data: ['主机', '路由器'],
            top: 4,
            right: '20%',
            textStyle: {
                color: '#fff',
            },
        },
        tooltip: {
            show: false,
        },
        grid: [{
            show: false,
            left: '4%',
            top: 60,
            bottom: 60,
            containLabel: true,
            width: '46%',
        }, {
            show: false,
            left: '50.5%',
            top: 80,
            bottom: 60,
            width: '0%',
        }, {
            show: false,
            right: '4%',
            top: 60,
            bottom: 60,
            containLabel: true,
            width: '46%',
        }, ],

        xAxis: [
            {
            type: 'value',
            inverse: true,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            position: 'top',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 12,
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#1F2022',
                    width: 1,
                    type: 'solid',
                },
            },
        }, {
            gridIndex: 1,
            show: false,
        }, {
            gridIndex: 2,
            type: 'value',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            position: 'top',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 12,
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#1F2022',
                    width: 1,
                    type: 'solid',
                },
            },
        }, ],
        yAxis: [{
            type: 'category',
            inverse: true,
            position: 'right',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                margin: 8,
                textStyle: {
                    color: '#fff',
                    fontSize: 12,
                },

            },
            data: myData,
        }, {
            gridIndex: 1,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 12,
                },

            },
            data: myData.map(function(value) {
                return {
                    value: value,
                    textStyle: {
                        align: 'center',
                    }
                }
            }),
        }, {
            gridIndex: 2,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                textStyle: {
                    color: '#fff',
                    fontSize: 12,
                },

            },
            data: myData,
        }, ],
        series: [],

    },

    options: [],


};

for (var i = 0; i < timeLineData.length; i++) {
    option.baseOption.timeline.data.push(timeLineData[i]);
    option.options.push({
        
        series: [{
                name: '主机',
                type: 'bar',
                barGap: 20,
                barWidth: 2,
                label: {
                    normal: {
                        show: false,
                    },
                    emphasis: {
                        show: true,
                        position: 'left',
                        offset: [0, 0],
                        textStyle: {
                            color: '#fff',
                            fontSize: 14,
                        },
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#084489',
                    },
                    emphasis: {
                        color: '#084489',
                    },
                },
                data: databeast[timeLineData[i]],
            },
            {
                name: '路由器',
                type: 'bar',
                barGap: 20,
                barWidth: 2,
                xAxisIndex: 2,
                yAxisIndex: 2,
                label: {
                    normal: {
                        show: false,
                    },
                    emphasis: {
                        show: true,
                        position: 'right',
                        offset: [0, 0],
                        textStyle: {
                            color: '#fff',
                            fontSize: 14,
                        },
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#22AEEB',
                    },
                    emphasis: {
                        color: '#22AEEB',
                    },
                },
                data: databeauty[timeLineData[i]],
            }
        ]
    });
}

shuangzhu.setOption(option);



}
shuangzhuf();