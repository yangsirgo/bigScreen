var qushi = echarts.init(document.getElementById('qushi'));

var qushi_option = {
    tooltip: {
        trigger: 'axis',
        formatter: function(params, ticket, callback) {

            var res = params[0].name;

            for (var i = 0, l = params.length; i < l; i++) {
                if (params[i].seriesType === 'line') {
                    res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '-') + 'h';
                } else {
                    res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '-') + '个';
                }
            }
            return res;

        }
    },
    grid: {
        containLabel: true,
        top:50,
        left:10,
        right:20,
        bottom:10
    },
    legend: {
        top:10,
        data: ['上海','北京','天津'],
        textStyle: {
            color: '#fff'
        }
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine:{
            lineStyle:{
                color:'#fff',
                width:1,//这里是为了突出显示加上的
            }
        },
        data: ['00:00','03:00','06:00','09:00','12:00','15:00','18:00','21:00','24:00']
    }],
    yAxis: {
        type: 'value',
        axisLine: {
            show: false,
            lineStyle:{
                color:'#fff',
                width:1,//这里是为了突出显示加上的
            }
        },
        name: 'Mbps',
        min: 0,
        position: 'left',
        data : ['0', '20', '40', '60', '80', '100']
    },
    series: [
        {
            name: '上海',
            type: 'line',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                }
            },
            lineStyle: {
                normal: {width: 3, color:'#084489', shadowColor: 'rgba(0,0,0,1)', shadowBlur: 1, shadowOffsetY: 1}
            },
            data: [10, 30, 40, 50, 20,90,30,70,55],
            color:'#084489'
        },
        {
            name: '北京',
            type: 'line',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                }
            },
            lineStyle: {
                normal: {width: 3, color:'#0D599C', shadowColor: 'rgba(0,0,0,1)', shadowBlur: 1, shadowOffsetY: 1}
            },
            data: [50, 36, 70, 10, 30,80,10,30,15],
            color:'#0D599C'
        }
        ,
        {
            name: '天津',
            type: 'line',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                }
            },
            lineStyle: {
                normal: {width: 3, color:'#1781C1', shadowColor: 'rgba(0,0,0,1)', shadowBlur: 1, shadowOffsetY: 1}
            },
            data: [20, 10, 80, 20, 10,70,40,20,15],
            color:'#1781C1'
        }

    ]
};
qushi.setOption(qushi_option);
$(window).resize(function(){

        qushi.resize();

});
