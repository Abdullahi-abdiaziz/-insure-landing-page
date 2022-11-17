const humbergur_open = document.querySelector('.open');
const humbergur_close = document.querySelector('.close');
const navbar = document.querySelector('#navbar');

humbergur_open.addEventListener('click', function show() {
    humbergur_open.style.display = "none";
    humbergur_close.style.display = "block";
    navbar.classList.toggle('active');
});

humbergur_close.addEventListener('click', function hide() {
    humbergur_close.style.display = "none";
    humbergur_open.style.display = "block";
    navbar.classList.remove('active');
});