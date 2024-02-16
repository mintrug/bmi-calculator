function HistoryBMI(props) {
    const dataStorages = props.datas
    return (
        <div className='bmi-history-container'>
            {dataStorages.map((dataStorage) => (
                <div className='history-item'>
                    <div className='heading center'>
                        BMI: {dataStorage.result}
                    </div>
                    <div className='card-data'>
                        <p className='info'>Weight: {dataStorage.weight}</p>
                        <p className='info'>Height: {dataStorage.height}</p>
                        <p className='info'>Date: 10/29/2023</p>
                    </div>
                    <button className='delete-btn'>X</button>
                </div>
            ))}
        </div>
    )
}

export default HistoryBMI
