import { useState } from 'react'

import ChartBMI from './ChartBMI'
import FormBMI from './FormBMI'
import HistoryBMI from './HistoryBMI'
import { calculateBMI } from '../logic/calculator'

function App() {
    const initialState = {
        weight: '',
        height: '',
        date: '',
    }

    const [data, setData] = useState(initialState)
    const [dataStorages, setDataStorages] = useState([])

    const handleSubmit = () => {
        setDataStorages((prev) => [
            ...prev,
            {
                weight: data.weight,
                height: data.height,
                date: '',
                result: calculateBMI(data.weight, data.height),
            },
        ])
        setData(initialState)
    }

    return (
        <div className='container'>
            <div className='header center'>
                <h1>BMI Tracker</h1>
            </div>
            <FormBMI datas={data} funcs={{ setData, handleSubmit }} />
            <div
                className='chartContainer'
                style={{ width: 862, height: 431, margin: 'auto' }}
            >
                <ChartBMI />
            </div>
            <div className='sub-header center'>
                <h4>7 Day Data</h4>
            </div>
            <HistoryBMI datas={dataStorages} />
            <div className='undo-btn-container center'>
                <button className='btn'>Undo</button>
            </div>
        </div>
    )
}

export default App
