const modal = document.getElementById('modal');
const btn = document.getElementById('open-btn');

const logo = document.getElementById('logo')
const closeButton = document.getElementById('close-btn')
const storeModal = document.getElementById('store-modal')


btn.addEventListener('click', () => {
    modal.style.display = 'block';
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
})

logo.addEventListener('click', () => {
    storeModal.style.display = 'block';
    window.onclick = function (event) {
        if (event.target == storeModal) {
            modal.style.display = "none";
        }
    }
})

closeButton.addEventListener('click', () => {
    storeModal.style.display = 'none';
})



const ContinueButton = document.getElementById('redirect')
ContinueButton.addEventListener('click', () => window.location.pathname = '/index.html')