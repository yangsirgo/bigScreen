var warns = echarts.init(document.getElementById('warnsc'));

var warns_data = [
        {value: 335,name: '端口流量'}, 
        {value: 335,name: 'CPU利用率'},
        {value: 315,name: '内存利用率'}, 
        {value: 200,name: '硬盘'},
        {value: 140,name: '进程数'}
    ];

warns_option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    
    color: colorArry,
    legend: { //图例组件，颜色和名字
        left: '30',
        top: '20',
        orient: 'vertical',
        itemGap: 12, //图例每项之间的间隔
        itemWidth: 10,
        itemHeight: 10,
        icon: 'rect',
        data: ['端口流量', 'CPU利用率', '内存利用率', '硬盘', '进程数'],
        textStyle: {
            color:'#fff',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 12,
        }
    },
    series: [{
        name: '告警次数',
        type: 'pie',
        clockwise: false, //饼图的扇区是否是顺时针排布
        minAngle: 20, //最小的扇区角度（0 ~ 360）
        center: ['65%', '50%'], //饼图的中心（圆心）坐标
        radius: ['40%', '70%'], //饼图的半径
        avoidLabelOverlap: true, ////是否启用防止标签重叠
        itemStyle: { //图形样式
            normal: {
                borderColor: '#1e2239',
                borderWidth: 1.5,
            },
        },
        label: { //标签的位置
            normal: {
                show: true,
                position: 'inside', //标签的位置
                formatter: "{d}%",
                textStyle: {
                    color: '#fff',
                }
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontWeight: 'bold'
                }
            }
        },
        data: warns_data
    }]
};

warns.setOption(warns_option);
