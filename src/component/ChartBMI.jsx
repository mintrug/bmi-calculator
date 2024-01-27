import 'chart.js/auto'
import { Line } from 'react-chartjs-2'
import { useEffect, useRef, useState } from 'react'

function ChartBMI() {
    const chartRef = useRef(null)
    const [chartData, setChartData] = useState({ label: '', datasets: [] })

    useEffect(() => {
        const chart = chartRef.current
        const gradient = chart.ctx.createLinearGradient(63, 81, 181, 700)
        gradient.addColorStop(0, '#929dd9')
        gradient.addColorStop(1, '#172b4d')

        if (chart) {
            setChartData({
                labels: [
                    '10/29/2023',
                    '11/23/2023',
                    '11/23/2023',
                    '12/1/2023',
                    '12/1/2023',
                ],
                datasets: [
                    {
                        label: 'BMI',
                        data: ['31.91', '29.74', '20.52', '29.74', '16.17'],
                        backgroundColor: gradient,
                        fill: true,
                        tension: 0.4,
                        borderColor: '#3F51B5',
                        pointRadius: 6,
                        pointHoverRadius: 8,
                        pointHoverBorderColor: 'white',
                        pointHoverBorderWidth: 2,
                    },
                ],
            })
        }
    }, [])

    const options = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date',
                    color: 'white',
                    font: {
                        size: 18,
                    },
                    padding: 6,
                },
                border: {
                    display: false,
                },
                grid: {
                    display: false,
                },
                ticks: {
                    color: 'white',
                    font: {
                        size: 16,
                    },
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'BMI',
                    color: 'white',
                    font: {
                        size: 18,
                    },
                    padding: 6,
                },
                border: {
                    display: false,
                },
                grid: {
                    display: false,
                },
                ticks: {
                    color: 'white',
                    font: {
                        size: 16,
                    },
                },
                beginAtZero: true,
            },
        },
        plugins: {
            tooltip: {
                titleFont: {
                    size: 13,
                },
                bodyFont: {
                    size: 13,
                },
            },
        },
    }

    return <Line data={chartData} options={options} ref={chartRef} />
}

export default ChartBMI
