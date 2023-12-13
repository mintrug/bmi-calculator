import img from '../assets/chart.png'

function App() {
    return (
        <div className='container'>
            <div className='header center'>
                <h1>BMI Tracker</h1>
            </div>
            <div className='bmi-form'>
                <div className='input-item'>
                    <label htmlFor='weight'>Weight (in kg)</label>
                    <input id='weight' type='text' />
                </div>
                <div className='input-item'>
                    <label htmlFor='height'>Height (in cm)</label>
                    <input id='height' type='text' />
                </div>
            </div>
            <div className='calculate-btn'>
                <button>Calculate BMI</button>
            </div>
            <div className='bmi-chart'>
                <img src={img} width='500px' alt='chart-img' />
            </div>
            <div className='sub-header'>7 Day Data</div>
            <div className='bmi-history-container'>
                <div className='history-item'>
                    <div className='heading'>BMI</div>
                    <p className='info'>Weight</p>
                    <p className='info'>Height</p>
                    <p className='info'>Date</p>
                </div>
                <div className='history-item'>
                    <div className='heading'>BMI</div>
                    <p className='info'>Weight</p>
                    <p className='info'>Height</p>
                    <p className='info'>Date</p>
                </div>
                <div className='history-item'>
                    <div className='heading'>BMI</div>
                    <p className='info'>Weight</p>
                    <p className='info'>Height</p>
                    <p className='info'>Date</p>
                </div>
                <div className='history-item'>
                    <div className='heading'>BMI</div>
                    <p className='info'>Weight</p>
                    <p className='info'>Height</p>
                    <p className='info'>Date</p>
                </div>
            </div>
            <div className='undo-btn'>
                <button>Undo</button>
            </div>
        </div>
    )
}

export default App
