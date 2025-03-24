const firstBtn = document.querySelector('.firstBtn');
const secondBtn = document.querySelector('.secondBtn');
let userLink = '';
firstBtn.addEventListener('click', () => {
    userLink = prompt('Введіть посилання:');
});
secondBtn.addEventListener('click', () => {
    window.location.href = userLink;
})