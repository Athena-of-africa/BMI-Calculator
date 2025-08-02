document.addEventListener('DOMContentLoaded', () => {
    let button = document.getElementById('btn');

    button.addEventListener('click', () => {
        const height = parseInt(document.getElementById('height').value);
        const weight = parseInt(document.getElementById('weight').value);
        const result = document.getElementById('output');

        let height_status = false, weight_status = false;

        if (!height || isNaN(height) || height <= 0) {
            const msg = 'Invalid height';
            console.log(msg);
            document.getElementById('height-error').innerHTML = msg;
        } else {
            document.getElementById('height-error').innerHTML = '';
            height_status = true;
        }

        if (!weight || isNaN(weight) || weight <= 0) {
            const msg = 'Invalid weight';
            console.log(msg);
            document.getElementById('weight-error').innerHTML = msg;
        } else {
            document.getElementById('weight-error').innerHTML = '';
            weight_status = true;
        }

        if (height_status && weight_status) {
            const bmi = (weight / ((height * height) / 10000)).toFixed(2);
            console.log(`Calculated BMI: ${bmi}`);

            if (bmi < 18.6) {
                result.innerHTML = 'Underweight : ' + bmi;
            } else if (bmi >= 18.6 && bmi <= 24.9) {
                result.innerHTML = 'Normal : ' + bmi;
            } else {
                result.innerHTML = 'Overweight : ' + bmi;
            }
        } else {
            console.log('Form contains errors.');
            result.innerHTML = '';
        }
    });
});
