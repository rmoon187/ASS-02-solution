
function changeButtonText() {
    const btnPrimary = document.querySelector('.btn-primary');
    

    if (window.innerWidth <= 576) {
        btnPrimary.textContent = 'Join Now!';
    }
}
   


changeButtonText();


window.addEventListener('resize', changeButtonText);
