
//Task 1
const btn = document.getElementById('primary-action-btn')
btn.addEventListener('click', () => {
    btn.innerHTML = 'Clicked!';
    btn.classList.replace('btn-primary', 'btn-success') ||
    btn.classList.replace('btn-success', 'btn-primary');
    btn.disabled = true; //*** */
})

//Task 2  improve the repeated code
const incrementBtn = document.getElementById('increment-btn')
incrementBtn.addEventListener('click', () => {
    num = Number(document.getElementById('counter-value').innerHTML);
    num = num + 1;
    document.getElementById('counter-value').innerHTML = `${num}` //***
})

const decrementBtn = document.getElementById('decrement-btn')
decrementBtn.addEventListener('click', () => {
    num = Number(document.getElementById('counter-value').innerHTML);
    if (num == 0) {
        btn.disabled = true;
    } else {
        num = num - 1;
        document.getElementById('counter-value').innerHTML = `${num}`
    }

})


//Task 3
const alertBox = document.getElementById('alert-box')
const alertBtn = document.getElementById('toggle-alert-btn')

alertBtn.addEventListener('click', () => {
    alertBox.classList.toggle('d-none');

})

// Task 4 & 5
const viewBtns = document.querySelectorAll('button[data-view]')
viewBtns.forEach(viewBtn => {
    viewBtn.addEventListener('click', () => {
            viewBtns.forEach(viewBtn => viewBtn.classList.remove('active'));
            document.getElementById('view-output').innerHTML = viewBtn.innerHTML;
            viewBtn.classList.add('active')
        
    }) 
});


// Task 6
const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    nameInput = document.getElementById('name').value  //*** 
    emailInput = document.getElementById('email').value
    messageInput = document.getElementById('message').value
    if (! nameInput) {
        document.getElementById('error-message').innerHTML = 'Please put your name!'
    } else if (! emailInput) {
        document.getElementById('error-message').innerHTML = 'Please put your email!'
    } else if (! messageInput) {
        document.getElementById('error-message').innerHTML = 'Please put your message!'
    } else {
        return
    }
})
