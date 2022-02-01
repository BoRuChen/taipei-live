import ReactEcharts  from 'echarts-for-react';

export const BarChart = ({data}) => {

    return(
        <ReactEcharts
            option={{
                xAxis: {
                    type: 'category',
                    data: ['共同生活戶', '獨立生活戶']
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    show: true,
                    top: 'bottom',
                },
                yAxis: {
                    type: 'value',
                },
                series: [
                    {
                        data: [data.household_ordinary_m, data.household_single_m],
                        type: 'bar',
                        name: '男',
                        itemStyle: {
                            color: '#5CADAD'
                        }
                    },
                    {
                        data: [data.household_ordinary_f, data.household_single_f],
                        type: 'bar',
                        name: '女',
                        itemStyle: {
                            color: '#FF00FF'
                        }
                    }
                ]
            }}
            notMerge={true}
            lazyUpdate={true}
            style={{width: '90%',height:'90%'}}
        />
    )
}
