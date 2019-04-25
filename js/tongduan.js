var tongduan = echarts.init(document.getElementById('tongduanc'));

tongduan_options = 
{
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
            color: '#ffffff'
        }

    },
    grid: {
        containLabel: true,
        top:10,
        left:20,
        right:10,
        bottom:0
    },
    title: {
        text: '',
        subtext: ''
    },
    legend: {
        data: ['链路通', '链路断'],
		textStyle: {
            color: '#fff'
        }
    },
    calculable: true,
    yAxis: [{
		axisLine: {
            show: false,
            lineStyle:{
                color:'#fff',
                width:1,//这里是为了突出显示加上的
            }
        },
        type: 'category',
        data: ['总局-天津', '总局-北京', '总局-兰州', '总局-甘肃', '总局-浙江', '总局-广州', '总局-山东', 
        '总局-新疆']
    }],
    xAxis: [{
        name: '通断数',
        type: 'value',
		axisLine: {
            show: false,
            lineStyle:{
                color:'#fff',
                width:1,//这里是为了突出显示加上的
            }
        }
    }],

    series: [
        {
            name: '链路通',
            type: 'bar',
            stack: '总数',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'inside'
                    },
                    color: '#22AEEB'
                }
            },
            data: [274, 269, 268, 272, 259,268, 273, 283]
        },
        {
            name: '链路断',
            type: 'bar',
            stack: '总数',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'inside'
                    },
                    color: '#084489'
                }
            },
            data: [14, 19, 20, 16, 29,20, 15, 5]
        }
        

    ]
};
tongduan.setOption(tongduan_options);
