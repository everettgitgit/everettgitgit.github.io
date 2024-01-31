//question 2
let h1 = document.createElement('h1');

h1.textContent = 'Shing Cheong Wai';

h1.style.textAlign = 'center';
h1.style.color = '#A9A9A9';

document.body.appendChild(h1);

//question 3
let input1 = document.createElement('input');
let input2 = document.createElement('input');

let button = document.createElement('button');
button.textContent = 'Calculate Sum';

let sumDisplay = document.createElement('p');

document.body.appendChild(input1);
document.body.appendChild(input2);
document.body.appendChild(button);
document.body.appendChild(sumDisplay);


//question 4
let validateInputs = () => {
    try {
        input1.style.borderColor = '';
        input2.style.borderColor = '';
        sumDisplay.textContent = '';
        if ((isNaN(input1.value) || input1.value === '') && (isNaN(input2.value) || input2.value === '')) {
            throw new Error('Input 1 and Input 2 are not numbers');
        }
        else if (isNaN(input1.value) || input1.value === '') {

            throw new Error('Input 1 is not a number');
        }
        else if (isNaN(input2.value) || input2.value === '') {
            throw new Error('Input 2 is not a number');
        }

    } catch (error) {
        // Display the error message and set the border of the input box to red
        if (error.message === 'Input 1 is not a number') {
            input1.style.borderColor = 'red';
        } else if (error.message === 'Input 2 is not a number') {
            input2.style.borderColor = 'red';
        }
        else if (error.message === 'Input 1 and Input 2 are not numbers') {
            input1.style.borderColor = 'red';
            input2.style.borderColor = 'red';
        }
        sumDisplay.textContent = error.message;
    }
};

button.addEventListener('click', function() {
    validateInputs();
    if (sumDisplay.textContent === '') {
        let sum = Number(input1.value) + Number(input2.value);
        sumDisplay.textContent = 'Sum: ' + sum;
    }
});


//question 5
let style = document.createElement('style');

style.innerHTML = `
  body {
    text-align: center;
  }
  input, button {
    margin: 10px;
    font-size: 20px;
  }
`;

document.head.appendChild(style);