export const calculateBMI = (weight, height) => {
    const resultBMI = Number(weight) / Math.pow(Number(height / 100), 2)
    return resultBMI.toFixed(2)
}
