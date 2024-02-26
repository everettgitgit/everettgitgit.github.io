//  @name: Assignement1
//  @Course Code: SODV1201
//  @class: Software Development Diploma program.
//  @author: Ethan Wai

window.onload = function() {
    setTimeout(function() {
        document.getElementById('imageName').style.visibility = 'visible';
    }, 10000);
    document.getElementById('currentYear').textContent = new Date().getFullYear();
};