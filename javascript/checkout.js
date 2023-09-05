const modal = document.getElementById('modal');
const btn = document.getElementById('open-btn');


btn.addEventListener('click', () => {
    modal.style.display = 'block';
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
})

const ContinueButton = document.getElementById('redirect')
ContinueButton.addEventListener('click', () => window.location.pathname = '/index.html')