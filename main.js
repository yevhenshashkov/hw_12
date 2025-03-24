const parentContainer = document.querySelector('#btnId');
btnId.addEventListener('click', (event) => {
   
    if (event.target && event.target.tagName === 'BUTTON') {
        console.log(`Кликнуто на кнопці: ${event.target.textContent}`);
    }
});