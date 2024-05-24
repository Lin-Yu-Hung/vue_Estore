export const bestSellerChart = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: (params) => {
            const info = params[0];
            return `
            ${info.marker}<span class="fw-bold">${info.seriesName}</span><br /> 
            ${info.name} : <span class="fw-bold">${(info.value).toLocaleString()} 元</span>
            `
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
        data: ['Game Console', 'Smartphone', 'Computer', 'Smartwatch', 'Headphones', 'MacBook']
    },
    series: [
        {

            name: '2024',
            type: 'bar',
            data: [18203, 23489, 29034, 50230, 104970, 131744],

        },

    ]

}
export const proportionOfSalesChart = {
    tooltip: {
        trigger: 'item',
        formatter: (params) => {
            return `
            ${params.marker}<span class="fw-bold">${params.seriesName}</span><br /> 
            ${params.name} : <span class="fw-bold">${(params.percent)} %</span>
            `
        }
    },
    legend: {
        bottom: "center",
        orient: 'vertical',
        right: '10%',
        selectedMode: false
    },
    series: [
        {
            name: '銷售額占比',
            type: 'pie',
            radius: '60%',
            center: ['35%', '50%'], // 調整這裡的數值來改變圓餅圖的位置
            data: [
                { value: 1048, name: '手機' },
                { value: 735, name: '平板' },
                { value: 580, name: '筆記型電腦' },
                { value: 484, name: '3C產品' },
                { value: 300, name: '智慧手錶' }
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