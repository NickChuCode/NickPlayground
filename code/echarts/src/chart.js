var myChart = echarts.init(document.getElementById('main'))

var options = {
    // 标题
    title: {
        text: 'bar 图展示ha'
    },
    // 工具箱
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {
                show: true
            }
        }
    },
    // 图例
    legend: {
        data: ['销量', '产量'] // 图例中的名字必须和series中的一致，否则不会显示
    },
    // x轴
    xAxis: {
        data: ['衬衫', '羊毛衫', 'some', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }, {
        name: '产量',
        type: 'line',
        data: [7, 30, 12, 5] // 数据不用一样
    }]
}

myChart.setOption(options)
