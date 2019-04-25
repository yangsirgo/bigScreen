var bars = echarts.init(document.getElementById('barsc'));

var bars_option = {
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
        top:80,
        bottom:0
    },
    legend: {
        data: ['网络设备', '服务器', '网络设备效率','服务器效率'],
        textStyle: {
            color: '#fff'
        }
    },
    xAxis: [{
        type: 'category',
        axisLine:{
            lineStyle:{
                color:'#fff',
                width:1,//这里是为了突出显示加上的
            }
        },
        data: [{
            value: '北京',
            textStyle: {
                fontSize: 10,
                color: '#fff'
            }},{
            value: '新疆',
            textStyle: {
                fontSize: 10,
                color: '#fff'
            }},{
            value: '上海',
            textStyle: {
                fontSize: 10,
                color: '#fff'
            }},{
            value: '黑龙江',
            textStyle: {
                fontSize: 10,
                color: '#fff'
            }},{
            value: '南方',
            textStyle: {
                fontSize: 10,
                color: '#fff'
            }},{
            value: '北方',
            textStyle: {
                fontSize: 10,
                color: '#fff'
            }}]
    }],
    yAxis: [{
        type: 'category',
        axisLine:{
            lineStyle:{
                color:'#fff',
                width:1,//这里是为了突出显示加上的
            }
        },
        name: '设备总数',
        min: 0,
        position: 'left',
        data : ['0', '200', '400', '600', '800', '1000']
    }, {
        type: 'category',
        axisLine:{
            lineStyle:{
                color:'#fff',
                width:1,//这里是为了突出显示加上的
            }
        },
        name: '效率',
        min: 0,
        position: 'right',
        data : ['0', '20', '40', '60', '80', '100']
    }],
    series: [
        {
            name: '网络设备',
            type: 'bar',
            yAxisIndex: 1,
            label: {
                normal: {
                    show: true,position: 'top'
                }
            },
            data: [2, 3, 4, 5, 6,3],
            color:'#22AEEB',
        },
        {
            name: '服务器',
            type: 'bar',
            yAxisIndex: 1,
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data: [4, 6, 3, 2, 1,4],
            color:'#3EC1DB'
        },
        {
            name: '网络设备效率',
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
            data: [1, 3, 4, 5, 2,5],
            color:'#1781C1'
        },
        {
            name: '服务器效率',
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
            data: [2, 2, 5, 3, 1,3],
            color:'#084489'
        }

    ]
};
bars.setOption(bars_option);
