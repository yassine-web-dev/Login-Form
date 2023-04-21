/* Global Rules */

/* Show/Hide Password On Input Field */
var myInput = document.getElementById('password'),
    myIcon  = document.getElementById('icon');

myIcon.addEventListener('click', function () {

    if (myInput.type === 'password') {

        myInput.type = 'text';
        this.setAttribute('class', 'fa-solid fa-eye-slash position-ab');

    } else {

        myInput.type = 'password';
        this.setAttribute('class', 'fa-solid fa-eye position-ab');

    }

});