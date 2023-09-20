export const revenueLineChart = {
    title: {
        text: '本周成長比',
        top: "3%",
        left: '12%',
        textStyle: {


        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        top: "15%",
        bottom: "8%",
        left: "12%",
        right: "12%"
    },
    legend: {
        top: "3%",
        right: "12%",
    },

    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: [
        {
            type: "value",
            axisLabel: {
                formatter: "{value} %",
            },
        },
        {
            type: "value",
            axisLabel: {
                formatter: "{value} 萬元",
            },
        },
    ],
    series: [
        {
            tooltip: {
                valueFormatter: function (value) {
                    return value.toLocaleString() + " 萬元";
                },
            },
            name: "營業額",
            data: [130, 202, 624, 118, 935, 447, 360],
            type: 'bar',
            yAxisIndex: 1,
        },
        {
            tooltip: {
                valueFormatter: function (value) {
                    return value + "%";
                },
            },
            name: "會員數量",
            data: [15, 23, 22, 21, 13, 14, 26],
            type: 'line'
        },
        {
            tooltip: {
                valueFormatter: function (value) {
                    return value + "%";
                },
            },
            name: "本季成長",
            data: [17, 28, 29, 29, 19, 19, 29],
            type: 'line'
        },

    ]
}