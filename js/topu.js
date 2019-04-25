var topu = echarts.init(document.getElementById('topu'));

var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

var greenicon = 'image://images/green.svg';
var redicon = 'image://images/red.svg';
var yellowicon = 'image://images/yellow.svg';

var topu_option = {
    xAxis: {
        show: false,
        // type : 'category',
        // boundaryGap : false,
        // data : axisData
        type: 'value'
    },
    yAxis: {
        show: false,
        type: 'value'
    },
    "series": [{
        "label": {
            "normal": {
                position: 'bottom',
                "textStyle": {
                    "fontSize": 12,
                    "color": '#fff',
                },
                "show": true
            }
        },
        "edgeLabel": {
            "normal": {
                "formatter": function(param) {
                    return param.data.category;
                },
                "show": true,
                "textStyle": {
                    "fontSize": 10
                }
            }
        },
        "type": "graph",

        "lineStyle": {
            "normal": {
                "opacity": 1,
                "width": 3,
                "color": '#37A2E3',
                type: "solid",
                "curveness": 0
            }
        },
        "data": [],
        //"layout": "force",
        "symbolSize": 20,
        "force": {
            "repulsion": 200,
            "edgeLength": [100, 100]
        },
        "roam": true,
        "focusNodeAdjacency": true,
        "links": []

    }
    ],
    "tooltip": {
        "formatter": function(param) {
            if (param.dataType === 'edge') {
                return param.data.category + ': ' + param.data.target;
            }
            return param.data.category + ': ' + param.data.name;
        }
    },
    "animationEasingUpdate": "quinticInOut",
    "animationDurationUpdate": 1500
};


$.ajax({
    type: "post",
    async: true,            //异步请求（同步请求将会锁住浏览器，用户其他操作必须等待请求完成才可以执行）
    url: "js/view.json",
    data: {},
    dataType: "json",        //返回数据形式为json
    success: function (result) {
        //请求成功时执行该函数内容，result即为服务器返回的json对象
        if (result) {
            var getSymbols = result.symbols;
            var getLines = result.lines;

            for(var i=0;i<getSymbols.length;i++){
                getSymbols[i].symbol = greenicon;
                getSymbols[i].symbolSize = [50, 35];
                getSymbols[i].draggable = true;
                getSymbols[i].label = {
                    "normal": {
                        "show": true
                    }
                };



            }
            for(var i=0;i<getLines.length;i++){

                getLines[i].source = getLines[i].srcSymbol;
                getLines[i].target = getLines[i].dstSymbol;
                getLines[i].target = getLines[i].dstSymbol;
                //getLines[i].category = getLines[i].name;



            }


            topu_option.series[0].data = getSymbols;
            topu_option.series[0].links = getLines;

          //  topu_option.series[1].data = getSymbols;

            topu.setOption(topu_option, true);



        }

    },
    error: function (errorMsg) {
        //请求失败时执行该函数
        alert("图表请求数据失败!");
        //
    }
})


$.ajax({
    type: "post",
    async: true,            //异步请求（同步请求将会锁住浏览器，用户其他操作必须等待请求完成才可以执行）
    url: "js/topu.json",
    data: {},
    dataType: "json",        //返回数据形式为json
    success: function (result) {
        //请求成功时执行该函数内容，result即为服务器返回的json对象
        if (result) {
            console.log(result);


            topu.hideLoading();
        }

    },
    error: function (errorMsg) {
        //请求失败时执行该函数
        alert("图表请求数据失败!");
        //
    }
})



