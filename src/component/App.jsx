import ChartBMI from './ChartBMI'

function App() {
    return (
        <div className='container'>
            <div className='header center'>
                <h1>BMI Tracker</h1>
            </div>
            <div className='bmi-form'>
                <div className='input-item'>
                    <label htmlFor='weight'>Weight (in kg)</label>
                    <input
                        id='weight'
                        type='number'
                        min='1'
                        max='999'
                        placeholder='50'
                    />
                </div>
                <div className='input-item'>
                    <label htmlFor='height'>Height (in cm)</label>
                    <input
                        id='height'
                        type='number'
                        min='1'
                        max='999'
                        placeholder='176'
                    />
                </div>
            </div>
            <div className='calculate-btn center'>
                <button>Calculate BMI</button>
            </div>
            <div
                className='chartContainer'
                style={{ width: 862, height: 431, margin: 'auto' }}
            >
                <ChartBMI />
            </div>
            <div className='sub-header center'>
                <h4>7 Day Data</h4>
            </div>
            <div className='bmi-history-container'>
                <div className='history-item'>
                    <div className='heading center'>BMI: 31.91</div>
                    <div className='card-data'>
                        <p className='info'>Weight: 89 kg</p>
                        <p className='info'>Height: 167 cm</p>
                        <p className='info'>Date: 10/29/2023</p>
                    </div>
                    <button className='delete-btn'>X</button>
                </div>
                <div className='history-item'>
                    <div className='heading center'>BMI: 31.91</div>
                    <div className='card-data'>
                        <p className='info'>Weight: 89 kg</p>
                        <p className='info'>Height: 167 cm</p>
                        <p className='info'>Date: 10/29/2023</p>
                    </div>
                    <button className='delete-btn'>X</button>
                </div>
                <div className='history-item'>
                    <div className='heading center'>BMI: 31.91</div>
                    <div className='card-data'>
                        <p className='info'>Weight: 89 kg</p>
                        <p className='info'>Height: 167 cm</p>
                        <p className='info'>Date: 10/29/2023</p>
                    </div>
                    <button className='delete-btn'>X</button>
                </div>
                <div className='history-item'>
                    <div className='heading center'>BMI: 31.91</div>
                    <div className='card-data'>
                        <p className='info'>Weight: 89 kg</p>
                        <p className='info'>Height: 167 cm</p>
                        <p className='info'>Date: 10/29/2023</p>
                    </div>
                    <button className='delete-btn'>X</button>
                </div>
                <div className='history-item'>
                    <div className='heading center'>BMI: 31.91</div>
                    <div className='card-data'>
                        <p className='info'>Weight: 89 kg</p>
                        <p className='info'>Height: 167 cm</p>
                        <p className='info'>Date: 10/29/2023</p>
                    </div>
                    <button className='delete-btn'>X</button>
                </div>
            </div>
            <div className='undo-btn-container center'>
                <button className='undo-btn'>Undo</button>
            </div>
        </div>
    )
}

export default App
