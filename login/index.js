const container = document.getElementById('container');
const registBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registBtn.addEventListener('click', () => {
    container.classList.add("active");
})

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
})