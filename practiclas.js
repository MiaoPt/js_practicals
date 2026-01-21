

btn = document.getElementById('primary-action-btn')

btn.addEventListener('click', () => {
    btn.innerHTML = 'Clicked!';
    btn.classList.replace('btn-primary', 'btn-success') ||
    btn.classList.replace('btn-success', 'btn-primary');
    btn.disabled = true;
})

incrementBtn = document.getElementById('increment-btn')


incrementBtn.addEventListener('click', () => {
    num = Number(document.getElementById('counter-value').innerHTML);
    num = num + 1;
    document.getElementById('counter-value').innerHTML = `${num}`
})

decrementBtn = document.getElementById('decrement-btn')
decrementBtn.addEventListener('click', () => {
    num = Number(document.getElementById('counter-value').innerHTML);
    if (num == 0) {
        btn.disabled = true;
    } else {
        num = num - 1;
        document.getElementById('counter-value').innerHTML = `${num}`
    }

})