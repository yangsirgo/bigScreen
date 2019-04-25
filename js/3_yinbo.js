function yinbof(){

var yinbo = echarts.init(document.getElementById('yinbo'));

var count = 300;
var categories = [];
var data1 = [];
var data2 = [];
var base1 = 8;
var base2 = 15;
var amp1 = 4;
var amp2 = 80;
var offset = 0;
for (var i = 0; i < count; i++) {
    categories.unshift(offset.toString());
    data1.unshift((i % 2 ? -1 : 1) * (base1 + Math.random() * amp1));
    data2.unshift((i % 2 ? 1 : -1) * (base2 + Math.random() * amp2));
    offset++;
}


option = {
    backgroundColor: '',
    color: colorArry,
    xAxis: {
        type: 'category',
        name: 'x',
        axisLine: {
            lineStyle: {
                color: '#4bbbf8',
                shadowColor: 'rgba(75, 211, 255, 0.5)',
                shadowBlur: 5
            }
        },
        axisTick: {
            interval: (index) => {
                if (index === -1 || index === 9) {
                    return false;
                } else {
                    return true;
                }
            }
        },
        axisLabel: {
            color: '#fff',
            fontSize: 12
        },
        splitLine: {
            show: false
        },
        data: categories
    },
    grid: {
        left: '3%',
        right: '4%',
        top: '10%',
        bottom: '4%',
        containLabel: true
    },
    yAxis: {
        name: 'y',
        axisLine: {
            lineStyle: {
                color: '#4bbbf8',
                shadowColor: 'rgba(75, 211, 255, 0.5)',
                shadowBlur: 5
            }
        },
        axisLabel: {
            color: '#fff',
            fontSize: 12
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(75, 211, 255, 0.2)',
                type: 'dashed'
            }
        }

    },
    series: [{
            name: 'x',
            type: 'line',
            smooth: 1,
            symbol: 'none',
            lineStyle: {
                normal: {
                    width: 0
                }
            },
            areaStyle: {
                normal: {
                    opacity:1,
                }
            },
            data: data1
        },

        {
            name: 'y',
            type: 'line',
            smooth: true,
            symbol: 'none',
            lineStyle: {
                normal: {
                    width: 0
                }
            },
            areaStyle: {
                normal: {
                    opacity: 1
                }
            },
            data: data2
        }
    ],
    animation: false
};
setInterval(function () {

    for (var i = 0; i <1.5; i++) {
        categories.pop();
        data1.pop();
        data2.pop();
        categories.unshift(offset.toString());
        data1.unshift((offset % 2 ? -1 : 1) * (base1 + Math.random() * amp1));
        data2.unshift((offset % 2 ? 1 : -1) * (base2 + Math.random() * amp2));
        offset++;
    }

    yinbo.setOption({
        xAxis: {
            data: categories  
        },
        series: [{
            name: 'x',
            data: data1
        }, {
            name: 'y',
            data: data2
        }]
    });
}, 500);


yinbo.setOption(option);
}
yinbof();