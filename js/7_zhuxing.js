var zhuxing = echarts.init(document.getElementById('zhuxing'));
var appcount = 11;

zhuxing_option = {
    tooltip: {
        show: false
    },
    dataZoom: {
        show: false,
        start: 0,
        end: 100
    },
    grid: {
        containLabel: true,
        top:10,
        left:20,
        right:10,
        bottom:0
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: true,
            axisLine: {
                lineStyle: {
                    color: '#4bbbf8',
                    shadowColor: 'rgba(75, 211, 255, 0.5)',
                    shadowBlur: 5
                }
            },
            data: (function (){
                var now = new Date();
                var res = [];
                var len = 10;
                while (len--) {
                    res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
                    now = new Date(now - 2000);
                }
                return res;
            })()
        },
        {
            type: 'category',
            boundaryGap: true,
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
                show: false
            },
            data: (function (){
                var res = [];
                var len = 10;
                while (len--) {
                    res.push(len + 1);
                }
                return res;
            })()
        }
    ],
    yAxis: [
        {
            type: 'value',
            scale: true,
            name: 'cpu',
            max: 20,
            min: 0,
            boundaryGap: [0.2, 0.2],
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
        {
            type: 'value',
            scale: true,
            name: '内存',
            max: 1200,
            min: 0,
            boundaryGap: [0.2, 0.2],
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
        }
    ],
    series: [
        {
            name:'实时动态',
            type:'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data:(function (){
                var res = [];
                var len = 10;
                while (len--) {
                    res.push(Math.round(Math.random() * 1000));
                }
                return res;
            })()
        },
        {
            name:'最新动态',
            type:'line',
            data:(function (){
                var res = [];
                var len = 0;
                while (len < 10) {
                    res.push((Math.random()*10 + 5).toFixed(1) - 0);
                    len++;
                }
                return res;
            })()
        }
    ],
    color:["#0263CB"]
};

setInterval(function (){
    axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');

    var data0 = zhuxing_option.series[0].data;
    var data1 = zhuxing_option.series[1].data;
    data0.shift();
    data0.push(Math.round(Math.random() * 1000));
    data1.shift();
    data1.push((Math.random() * 10 + 5).toFixed(1) - 0);

    zhuxing_option.xAxis[0].data.shift();
    zhuxing_option.xAxis[0].data.push(axisData);
    zhuxing_option.xAxis[1].data.shift();
    zhuxing_option.xAxis[1].data.push(appcount++);

    zhuxing.setOption(zhuxing_option);
}, 1500);

zhuxing.setOption(zhuxing_option);
