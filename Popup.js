(function() {
    'use strict';

    function isNumber(x) {
        return !isNaN(parseFloat(x)) && isFinite(x);
    }

    function solveWordProblem(problem) {
        // Split the problem into individual words
        let words = problem.split(' ');

        // Find the mathematical operator
        let operator = '';
        if (words.includes('plus')) {
            operator = '+';
        } else if (words.includes('minus')) {
            operator = '-';
        } else if (words.includes('times') || words.includes('multiplied')) {
            operator = '*';
        } else if (words.includes('divided')) {
            operator = '/';
        }

        // Extract the numbers from the problem
        let numbers = [];
        for (let i = 0; i < words.length; i++) {
            if (isNumber(words[i])) {
                numbers.push(parseInt(words[i]));
            }
        }

        // Perform the calculation
        let result = null;
        if (operator === '+') {
            result = numbers[0] + numbers[1];
        } else if (operator === '-') {
            result = numbers[0] - numbers[1];
        } else if (operator === '*') {
            result = numbers[0] * numbers[1];
        } else if (operator === '/') {
            result = numbers[0] / numbers[1];
        }

        // Return the result
        return result;
    }

    // Create a popup window
    let popup = window.open('', 'Word Problem Solver', 'width=400,height=400');

    // Create the GUI in the popup window
    let form = document.createElement('form');
    form.onsubmit = function(event) {
        event.preventDefault();
        let problem = document.getElementById('problem').value;
        let result = solveWordProblem(problem);
        let output = document.getElementById('output');
        output.innerHTML = result;
    };

    let label = document.createElement('label');
    label.innerText = 'Enter a word problem:';
    form.appendChild(label);

    let input = document.createElement('input');
    input.type = 'text';
    input.id = 'problem';
    form.appendChild(input);

    let button = document.createElement('button');
    button.type = 'submit';
    button.innerText = 'Solve';
    form.appendChild(button);

    let output = document.createElement('div');
    output.id = 'output';
    form.appendChild(output);

    popup.document.body.appendChild(form);
})();
