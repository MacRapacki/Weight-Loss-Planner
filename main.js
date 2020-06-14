/// INPUT [TYPE=RANGE] 
const weightRange = document.querySelector('.weight__input')
const weightDesireRange = document.querySelector('.desire__input')
const height = document.querySelector('.height')

const userWeight = document.querySelector('.user__weight')
const desireWeight = document.querySelector('.desire__weight')
const userHeight = document.querySelector('.user__height')


///HANDLE INPUTS [TYPE=RANGE]
weightRange.addEventListener('change', () => {
    userWeight.innerHTML = `${weightRange.value} kg`
})

weightDesireRange.addEventListener('change', () => {
    desireWeight.innerHTML = `${weightDesireRange.value} kg`
})

height.addEventListener('change', () => {
    userHeight.innerHTML = `${height.value} cm`
})


/// INPUT DATE [TYPE=DATE]
const startDateInput = document.querySelector('.start__date__input')
const endDateInput = document.querySelector('.end__date__input')


///BMI COUNT
const bmiCounter = () => {
    const bmi = weightRange.value / (height.value / 100 * height.value / 100)
    return bmi.toFixed(2)
}

const desireBmiCounter = () => {
    const bmi = weightDesireRange.value / (height.value / 100 * height.value / 100)
    return bmi.toFixed(2)
}

const bmiStatus = () => {
    if (bmiCounter() <= 18.5) {
        return "Underweight"
    } else if (bmiCounter() <= 24.9) {
        return "Healthy Weight"
    } else if (bmiCounter() <= 29.9) {
        return "Overweight"
    } else {
        return "Obese"
    }
}

const desireBmiStatus = () => {
    if (desireBmiCounter() <= 18.5) {
        return "Underweight"
    } else if (desireBmiCounter() <= 24.9) {
        return "Healthy Weight"
    } else if (desireBmiCounter() <= 29.9) {
        return "Overweight"
    } else {
        return "Obese"
    }
}

/// RESULT VARIABLE
const weightDifference = document.querySelector('.difference')
const currentBmi = document.querySelector('.current__bmi')
const desireBmi = document.querySelector('.desire__bmi')
const dayLoose = document.querySelector('.day__loose')

const startDate = document.querySelector('.start__date__input')
const endDate = document.querySelector('.end__date__input')


/// DAY DIFFRENCE COUNT
const weightPerDay = () => {
    const dayNumber = parseInt((new Date(endDate.value) - new Date(startDate.value)) / (24 * 3600 * 1000));
    const weightToLoose = weightRange.value - weightDesireRange.value;

    return (weightToLoose / dayNumber).toFixed(2)
    // return weightToLoose / dayNumber
}


/// HANDLE BUTTON
const btn = document.querySelector('.calculate__btn')

btn.addEventListener('click', () => {
    if (parseInt(weightDesireRange.value) >= parseInt(weightRange.value)) {
        return alert('Desire weight has to be less than Your weight')
    }

    if (startDate.value === "" || endDate.value === "" || startDate.value === endDate.value) {
        return alert('Start date need to be before end date')
    }

    if ((weightPerDay()) <= 0) {
        return alert('You have to set minimum one day forward')
    }

    weightDifference.innerHTML = `You want to loose ${weightRange.value - weightDesireRange.value} kg`;
    currentBmi.innerHTML = `Your current BMI is ${bmiCounter()} (${bmiStatus()})`;
    desireBmi.innerHTML = `Your desire BMI is ${desireBmiCounter()} (${desireBmiStatus()})`;
    dayLoose.innerHTML = `You have to loose ${weightPerDay()} kg per day `
})