function circlef(){
var count = 360;
var percent=1;
var visibleCount=count*percent;
var data = [];
for (var i = 0; i < visibleCount; i++) {
        data.push([1,i]);
}
for (var i = visibleCount; i < count; i++) {
        data.push([1,0]);
}

var circlecell1 = echarts.init(document.getElementById('circlecell1'));
var circlecell2 = echarts.init(document.getElementById('circlecell2'));
var circlecell3 = echarts.init(document.getElementById('circlecell3'));
var circlecell4 = echarts.init(document.getElementById('circlecell4'));

circlecell1_option = {
    graphic:[
        /*最底层圆*/
        {
            type:'ring',
            left:'center',
            top:'middle',
            shape:{
                r:390,
                r0:392
            },
            style:{
                fill:'#113048'
            }
        }
    ],
	series: [
	    /*仪表盘图，做中间刻度线*/
		{
			type: 'gauge',
			name: '业务指标',
			radius:'60%',
			startAngle:'0',
			endAngle:'-359.99',
			splitNumber:'100',
			pointer:{
				show:false
			},
			title:{
			    show:false
			},
			detail: {
    			show:false
			},
			data: [{value: 95, name: '完成率'}],
			axisLine:{
				lineStyle: {
					color:[[1,new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                        offset: 0,
                        color: 'rgba(4, 234,255, 1)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(74, 87,254, 1)'
                    }, {
                        offset:1,
                       color: 'rgba(59, 119,254, 1)'
                    }])]],
					width: 20,
					opacity: 1
				}
			},
			axisTick: {
				show: false
			},
			splitLine: {
				show: true,
				length:20,
				lineStyle: {
					color: '#000',
					width: 2,
					type: 'solid',
				},
			},
			axisLabel: {
				show: false
			}
		},
		/*内心原型图，展示整体数据概览*/
		{
        name: 'pie',
        type: 'pie',
        clockWise: true,
        startAngle:-270,
        radius: ['48%', '50%'],
        hoverAnimation: false,
        center: ['50%', '50%'],
        data: [{
            value: 5,
            label: {
                normal: {
                    formatter: '{d}%',
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '25',
                        fontWeight: 'normal',
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#f74369',
                    shadowColor: '#f74369',
                    shadowBlur: 10
                }
            }
        }, {
            value: 5,
            name: 'invisible',
            itemStyle: {
                normal: {
                    color: 'rgba(247,67,105,0)', // 未完成的圆环的颜色
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                emphasis: {
                    color: 'rgba(44,59,70,1)' // 未完成的圆环的颜色
                }
            }
        }]
    },
        /*外层环形图，展示详细占比*/
        {
        name: 'pie',
        type: 'pie',
        clockWise: true,
        startAngle:-270,
        radius: ['60%', '65%'],
        hoverAnimation: false,
        center: ['50%', '50%'],
        data: [{
            value: 5,
            name:'1',
            itemStyle:{
                normal:{
                    color:'#e7b507'
                }
            }
        },
        {
            value: 25,
            name:'1',
            itemStyle:{
                normal:{
                    color:'#009eff'
                }
            }
        },
        {
            value: 15,
            name:'1',
            itemStyle:{
                normal:{
                    color:'#f74369'
                }
            }
        }],
        itemStyle:{
            normal:{
                borderWidth:3,
                borderColor:'#00264d'
            }
        }
    }
	]
    }

circlecell1.setOption(circlecell1_option);
circlecell2.setOption(circlecell1_option);
circlecell3.setOption(circlecell1_option);
circlecell4.setOption(circlecell1_option);

}
 circlef();

