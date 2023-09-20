export const bestSellerChart = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        show: false
    },
    grid: {
        left: '2%',
        right: '6%',
        top: '8%',
        bottom: '2%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
    },
    series: [
        {
            name: '2011',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 50230]
        },

    ]

}
export const proportionOfSalesChart = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        bottom: "center",
        orient: 'vertical',
        right: '10%',
        selectedMode: false
    },
    series: [
        {
            name: 'Access From',
            type: 'pie',
            radius: '60%',
            center: ['35%', '50%'], // 調整這裡的數值來改變圓餅圖的位置
            data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' }
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
}