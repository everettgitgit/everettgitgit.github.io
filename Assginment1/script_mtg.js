//  @name: Assignement1
//  @Course Code: SODV1201
//  @class: Software Development Diploma program.
//  @author: Ethan Wai


function convertMarkToGrade() {
    var mark = parseInt(document.getElementById('mark-input-box').value);
    var message = document.getElementById('validation-message');

    if (isNaN(mark) || mark < 0 || mark > 100) {
        message.textContent = 'Please enter a valid mark (0-100).';
        return;
    }
    if (mark >= 90) message.textContent = 'Grade A';
    else if (mark >= 80) message.textContent = 'Grade B';
    else if (mark >= 70) message.textContent = 'Grade C';
    else if (mark >= 50) message.textContent = 'Grade D';
    else message.textContent = 'Grade F';
}