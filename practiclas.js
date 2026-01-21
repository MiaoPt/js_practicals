

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

alertBox = document.getElementById('alert-box')
alertBtn = document.getElementById('toggle-alert-btn')

alertBtn.addEventListener('click', () => {
    alertBox.classList.toggle('d-none');

})

viewBtns = document.querySelectorAll('button[data-view]')
viewBtns.forEach(viewBtn => {
    viewBtn.addEventListener('click', () => {
            viewBtns.forEach(viewBtn => viewBtn.classList.remove('active'));
            document.getElementById('view-output').innerHTML = viewBtn.innerHTML;
            viewBtn.classList.add('active')
        
    }) 
});