window.onload = function() {
    setTimeout(function() {
        document.getElementById('imageName').style.visibility = 'visible';
    }, 10000);
    document.getElementById('currentYear').textContent = new Date().getFullYear();
};