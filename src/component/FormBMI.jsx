function FormBMI(props) {
    const { weight, height } = props.datas
    const { setData, handleSubmit } = props.funcs

    const handleChange = (dataInput) => {
        setData({
            ...props.datas,
            [dataInput.id]: dataInput.value,
        })
    }

    return (
        <div>
            <div className='bmi-form'>
                <div className='input-item'>
                    <label htmlFor='weight'>Weight (in kg)</label>
                    <input
                        id='weight'
                        type='number'
                        min='1'
                        max='999'
                        placeholder='50'
                        value={weight}
                        onChange={(e) => handleChange(e.target)}
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
                        value={height}
                        onChange={(e) => handleChange(e.target)}
                    />
                </div>
            </div>
            <div className='calculate-btn center'>
                <button
                    className={
                        weight !== '' && height !== ''
                            ? 'btn'
                            : 'btn-invalid-value'
                    }
                    onClick={handleSubmit}
                >
                    Calculate BMI
                </button>
            </div>
        </div>
    )
}

export default FormBMI
