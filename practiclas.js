

btn = document.getElementById('primary-action-btn')

btn.addEventListener('click', () => {
    btn.innerHTML = 'Clicked!';
    btn.classList.replace('btn-primary', 'btn-success') ||
    btn.classList.replace('btn-success', 'btn-primary');
    btn.disabled = true;
})